function hideAIProducts() {
  const productBlocks = document.querySelectorAll('[data-test^="post-item-"]');
  productBlocks.forEach((block) => {
    const titleElement = block.querySelector('a[data-test^="post-name-"] div');
    if (titleElement && titleElement.textContent.toLowerCase().includes("ai")) {
      block.style.display = "none";
    }
  });
}

// Initial hide on page load
window.addEventListener("load", hideAIProducts);

// Mutation observer to hide new dynamically loaded product blocks
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      hideAIProducts();
    }
  });
});

const config = { childList: true, subtree: true };
observer.observe(document.body, config);
