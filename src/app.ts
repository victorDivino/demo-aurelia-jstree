export class App {
  data;

  public jstreeConfig = {
    plugins: ["wholerow"],
    check_callback: true,
    core: {
      multiple: false
    }
  }

  async activate() {
    this.data = {
      url: "//localhost:3000/ItemDiretorioApiDtos",
      data: function (node) {
        return node.id === "#"
          ? { PastaId: 0 }
          : { PastaId: node.id }
      }
    }
  }

  onSelectionChanged = (e: JQueryEventObject, data: any) => {
    console.log(data);
    debugger;
  }
}