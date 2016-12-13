function publishItems(name: string, type: string, alcohol: number): void {

  let article: HTMLElement = document.createElement("beer")
  article.innerHTML = `
    <h3>${name}</h3>
    <span>Bière ${type} de ${alcohol}°</span>`;

  document.getElementById("container").appendChild(article);
}

publishItems("Rochefort 10", "Brune", 11.3);
publishItems("Bush ambrée", "Ambrée", 12);