/// <reference types="jquery" />
jQuery(documentIsReady);

const updateAttributeValue = (
  selector: string,
  attributeValue: string,
  attr: string
) => {
  $(selector).attr(attr, attributeValue);
};

function documentIsReady() {
  const previewContainer = ".preview-container";
  $(previewContainer).hide();

  const previewContainerActions = {
    tranistionSpeed: 1000,
    direction: "right",
    animation: "slide",
    showPreviewContainer: (previewContainer: string) => {
      $(previewContainer)
        .stop(true, true)
        .fadeIn({
          duration: previewContainerActions.tranistionSpeed,
          queue: false,
        })
        .css("display", "none")
        .slideDown(previewContainerActions.tranistionSpeed);
    },
    hidePreviewContainer: (previewContainer: string) => {
      $(previewContainer)
        .fadeOut({
          duration: previewContainerActions.tranistionSpeed,
          queue: false,
        })
        .slideUp(previewContainerActions.tranistionSpeed);
    },
  };

  $(".site-link").on("mouseover", function () {
    const previewImageUrl = $(this).attr("data-img");
    updateAttributeValue(".preview-image", previewImageUrl, "src");
    previewContainerActions.showPreviewContainer(previewContainer);
  });
}
