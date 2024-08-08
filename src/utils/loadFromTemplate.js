import * as actionCreators from '../store/actions/actionCreators';
import { jsonBracelets } from '../examples/bracelets/json-bracelets';
import { jsonEarrings } from '../examples/earrings/json-earrings';
import { jsonNecklace } from '../examples/necklace/json-necklace';

const loadFromTemplate = (template, dispatch) => {
  dispatch(actionCreators.hideSpinner());

  let loadTemplate = {
    frames: [],
    paletteGridData: [],
    cellSize: [],
    columns: [],
    rows: []
  };

  switch (template) {
    case 1:
      loadTemplate = jsonBracelets;
      break;
    case 2:
      loadTemplate = jsonEarrings;
      break;
    case 3:
      loadTemplate = jsonNecklace;
      break;
    default:
      break;
  }

  if (loadTemplate) {
    const { frames, paletteGridData, columns, rows, cellSize } = loadTemplate;

    dispatch(
      actionCreators.setDrawing(
        frames,
        paletteGridData,
        cellSize,
        columns,
        rows
      )
    );
  }
};

export default loadFromTemplate;
