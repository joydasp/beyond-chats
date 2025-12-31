const Article = require("../models/Article");
const {
  getOriginalArticles,
  searchRelatedArticles
} = require("../services/articleService");
const scrapeExternalContent = require("../services/scrapeExternalBlog");
const rewriteWithLLM = require("../services/llmService");

async function updateArticles() {
  const originals = await getOriginalArticles();

  for (const original of originals) {
    console.log("Processing:", original.title);

    // STEP 1: Google search
    const links = await searchRelatedArticles(original.title);

    let ref1 = "";
    let ref2 = "";

    // STEP 2: Scrape references OR fallback
    if (links.length >= 2) {
      ref1 = await scrapeExternalContent(links[0]);
      ref2 = await scrapeExternalContent(links[1]);
    } else {
      console.log(
        "Not enough reference articles, using original content as fallback"
      );
      ref1 = original.content;
      ref2 = "";
    }

    // STEP 3: LLM rewrite (SAFE)
    let updatedContent = "";

    try {
      updatedContent = await rewriteWithLLM(
        original.content,
        ref1,
        ref2
      );
    } catch (err) {
      console.log("LLM failed (quota/limit). Using fallback rewrite.");

      updatedContent = `
AI Updated Version (Fallback)

${original.content}

[Note: This content was generated using a fallback due to API quota limits.]
      `;
    }

    // STEP 4: SAVE UPDATED ARTICLE
    await Article.create({
      title: original.title,
      content: updatedContent,
      sourceUrl: original.sourceUrl,
      isUpdated: true
    });

    console.log("Updated article saved:", original.title);
  }

  console.log("All articles updated");
}

module.exports = updateArticles;
