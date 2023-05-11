class DynamicContent {
  pageTitle = document.getElementById("page-title");
  navItems = document.querySelectorAll("[data-section-name]");
  indexContent = document.getElementById("index-section");
  questionContent = document.getElementById("question-content");
  progressInfoBar = document.getElementById("progress-info-bar");

  pageChangeSectionEvent = new CustomEvent("sectionChanged");

  constructor() {
    this.setPageTitle();
    this.toggleQuestionDOMElements();
    this.addEventsToNavItems();
  }

  /**
   * Show/Remove the elements used to show questions.
   */
  toggleQuestionDOMElements() {
    const currentActiveElementName =
      this.getCurrentActiveElement().dataset.sectionName;
    if (currentActiveElementName == "inicio") {
      this.indexContent.style.display = "block";

      this.questionContent.style.display = "none";
      this.progressInfoBar.style.display = "none";
    } else {
      this.indexContent.style.display = "none";

      this.questionContent.style.display = "block";
      this.progressInfoBar.style.display = "block";
    }
  }

  /**
   * Remove the property 'aria-current' to the current active item of the
   * navBar and add it to the clicked item. After that, call to 'setPageTitle'
   * method to change the page title.
   */
  addEventsToNavItems() {
    const that = this;
    this.navItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Remove current active element
        const currentActiveElement = that.getCurrentActiveElement();
        currentActiveElement.removeAttribute("aria-current");
        // Set the new active element
        this.setAttribute("aria-current", "page");
        // Change page content
        that.setPageTitle();
        that.toggleQuestionDOMElements();
        // Dispatch event to load new questions
        document.dispatchEvent(that.pageChangeSectionEvent);
      });
    });
  }

  /**
   * Get the text of the navBar item with property 'aria-current' and add it
   * to the page.
   */
  setPageTitle() {
    // Get text
    const currentNavItemText = document.querySelector(
      "#navbarNav [aria-current]"
    ).text;
    // Display it
    this.pageTitle.innerText = currentNavItemText;
  }

  /**
   * Get the current nav active element.
   *
   * @returns {Object} 	DOM tag that is inside #navbarNav and has the property
   * 										'aria-current'
   */
  getCurrentActiveElement() {
    const currentActiveElement = document.querySelector(
      "#navbarNav [aria-current]"
    );
    return currentActiveElement;
  }
}

new DynamicContent();
