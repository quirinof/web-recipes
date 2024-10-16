const carregarDiv = (element, items, headers = [], properties = []) => {
  const div = document.getElementById(element);
  let table = "<table> <tr>";

  for (const header of headers) {
    table += `<th>${header}</th>`;
  }

  table += "</tr>";

  const itensHtml = items.map((item) => {
    return `<tr> ${properties
      .map((prop) => `<td>${item[prop]}</td>`)
      .join("")} </tr>`;
  });

  table += itensHtml.join("\n");
  table += "</table>";
  div.innerHTML = table;
};
