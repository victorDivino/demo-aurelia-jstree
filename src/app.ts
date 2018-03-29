export class App {
  public jstreeConfig = {
    core: {
      multiple: false
    },
  }

  public data = [
    {
      text: "Root folder",
      state: { opened: true },
      isFolder: true,
      children: [
        {
          text: "File 1",
          state: { selected: true },
          icon: "jstree-file"
        },
        {
          text: "File 2",
          icon: "jstree-file"
        },
        {
          text: "Subfolder",
          state: { opened: false },
          icon: "jstree-folder",
          children: [
            {
              text: "File 1",
              state: { selected: true },
              icon: "jstree-file"
            },
            {
              text: "File 2",
              icon: "jstree-file"
            }]
          ,
          isFolder: true
        }
      ]
    }
  ];

  onSelectionChanged = (e: JQueryEventObject, data: any) => {
    debugger;
    console.group("Selection was changed");
    console.log(this);
    console.log(e);
    console.log(data);
    console.groupEnd();
  }
}