export const copyLinkToClipboardFn = (text: string) => {
  navigator.clipboard.writeText(text).then(function() {
    console.log("复制成功");
  }).catch(function(error) {
    console.log("error", error);
  });
};
