import { v4 as uuidv4 } from 'uuid';

export function convertJsonToAmpFormat(input) {
  const output = {
    metadata: {
      title: input?.slide1?.s1paragraph1 || "Untitled",
      publisher: "Suvichaar",
      publisherLogo: "https://media.suvichaar.org/media/brandasset/suvichaariconblack.png",
      backgroundAudio: ""
    },
    pages: [],
  };

  const defaultLogo = {
    type: "image",
    src: "https://media.suvichaar.org/media/designasset/brandasset/logo/suvichaarwhitelogoprimaryhori.png",
    layout: "fill",
    alt: "Suvichaarlogo"
  };

  const whiteQuoteImage = {
    type: "image",
    src: "https://cdn.suvichaar.org/media/designasset/elements/white-quotation.png",
    layout: "fill",
    alt: "White quotation"
  };

  Object.entries(input).forEach(([key, value]) => {
    const match = key.match(/^slide(\d+)$/);
    if (!match) return;

    const index = parseInt(match[1], 10);

    if (key === "slide10") {
      output.pages.push({
        id: "custom_slide",
        voiceOverAudio: value.s10audio1 || "",
        autoAdvanceAfter: "7s",
        images: [defaultLogo],
        texts: [
          {
            type: "text",
            tag: "h3",
            content: "Get Such\nInspirational\nContent"
          },
          {
            type: "text",
            tag: "p",
            content: "Like | Subscribe | Share\nwww.suvichaar.org"
          }
        ]
      });
      return;
    }

    const texts = [];
    const para1 = value[`s${index}paragraph1`];
    const para2 = value[`s${index}paragraph2`];
    if (para1) texts.push({ type: "text", tag: "h3", content: para1 });
    if (para2) texts.push({ type: "text", tag: "p", content: para2 });

    const images = [];
    const imageSrc = value[`s${index}image1`];
    if (imageSrc) {
      images.push({
        type: "image",
        src: imageSrc,
        layout: "fill",
        alt: "Quote image"
      });
    }
    images.push(defaultLogo, whiteQuoteImage);

    output.pages.push({
      id: uuidv4(),
      voiceOverAudio: value[`s${index}audio1`] || "",
      autoAdvanceAfter: "7s",
      images,
      texts
    });
  });

  return output;
}
