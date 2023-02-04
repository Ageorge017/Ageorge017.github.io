const previewContainer = ".preview-container";
$(document).ready(function () {
  $(previewContainer).hide();

  const previewContainerActions = {
    tranistionSpeed: 1000,
    direction: "right",
    animation: "slide",
    showPreviewContainer: (previewContainer) => {
      $(previewContainer)
        .stop(true, true)
        .fadeIn({
          duration: previewContainerActions.tranistionSpeed,
          queue: false,
        })
        .css("display", "none")
        .slideDown(previewContainerActions.tranistionSpeed);
    },
    hidePreviewContainer: (previewContainer) => {
      $(previewContainer)
        .fadeOut({
          duration: previewContainerActions.tranistionSpeed,
          queue: false,
        })
        .slideUp(previewContainerActions.tranistionSpeed);
    },
  };

  $(".site-link").hover(
    function () {
      const previewImage = $(this).attr("data-img");
      changeImageUrl(previewImage);
      previewContainerActions.showPreviewContainer(previewContainer);
    },
    function () {
      //   previewContainerActions.hidePreviewContainer(previewContainer);
    }
  );
});

const changeImageUrl = (previewImage) => {
  $(".preview-image").attr("src", previewImage);
};

const isPreviewContainerShowing = () => $(previewContainer).is(":visible");
