<script lang="ts">
  import { rem } from "$lib/utils";
  import { onMount, onDestroy } from "svelte";
  import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";

  export let data: any[];
  export let columns: ColumnDefinition[];
  export let tree = false;

  let tableComponent: HTMLElement;
  let tabulator: Tabulator;

  $: if (data.length > 0 && columns) {
    build();
  }

  async function build() {
    if (data.length === 0 || !columns) {
      return;
    }

    if (tabulator) {
      // If columns changed, we need to destroy and recreate the table
      // as Tabulator doesn't support updating columns directly
      const currentColumns = tabulator.getColumns().map((col) => col.getDefinition());
      // Compare column titles to detect changes (since formatters are functions and can't be compared)
      const currentTitles = currentColumns.map((col) => col.title).join("|");
      const newTitles = columns.map((col) => col.title).join("|");
      const columnsChanged =
        currentTitles !== newTitles || currentColumns.length !== columns.length;

      if (columnsChanged) {
        tabulator.destroy();
        tabulator = null;
      } else {
        tabulator.replaceData(data);
        return;
      }
    }

    if (!tabulator && tableComponent) {
      tabulator = new Tabulator(tableComponent, {
        dataTree: tree,
        dataTreeStartExpanded: [true, true, false],
        dataTreeBranchElement: false,
        dataTreeChildIndent: rem(30),
        dataTreeCollapseElement:
          "<span class='has-text-link icon is-small mr-3'><i class='fas fa-angle-up'></i></span>",
        dataTreeExpandElement:
          "<span class='has-text-link icon is-small mr-3'><i class='fas fa-angle-down'></i></span>",
        data: data,
        columns: columns,
        layout: "fitDataTable"
      });
    }
  }

  onMount(async () => {
    build();
  });

  onDestroy(() => {
    if (tabulator) {
      tabulator.destroy();
    }
  });
</script>

<div class="overflow-x-auto box py-0" style="max-width: 100%;" bind:this={tableComponent}></div>
