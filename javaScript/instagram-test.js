const wrapper = document.getElementById("instagram");

fetch("https://www.instagram.com/pepsi/")
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    const feedItems = JSON.parse(
      html.slice(
        html.indexOf("edge_owner_to_timeline_media") + 30,
        html.indexOf("edge_saved_media") - 2
      )
    );
    feedItems.edges.map((m) => {
      const node = m.node,
        a = document.createElement("a"),
        img = document.createElement("img");

      (a.target = "_blank"),
        (a.href = `https://www.instagram.com/p/${node.shortcode}/`),
        (img.src = node.display_url),
        a.append(img),
        wrapper.append(a);
    });
  });
