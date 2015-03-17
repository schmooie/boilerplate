window.Templates = {};

Templates.itemForm = [
'<form>',
  '<div class="form-group">',
    '<label for="title">Title</label>',
    '<input type="text" class="form-control" value=<%= title %>>',
  '</div>',
  '<div class="form-group">',
    '<label for="description">Description</label>',
    '<textarea class="form-control" rows="10"><%= description %></textarea>',
  '</div>',
  '<div class="form-group">',
    '<label for="notes">Internal Notes</label>',
    '<textarea class="form-control"><%= dealerInternalNotes %></textarea>',
  '</div>',
  '<div class="form-group">',
    '<label for="materials">Materials</label>',
    '<select class="form-control">',
      '<% _.each(itemEnums.material, function(m) { %>',
        '<option <% if (m === material.description) { %> <%= "selected" %> <% } %> ><%= m %></option>',
      '<% }) %>',
    '</select>',
    '<div class="checkbox">',
      '<label>',
        '<input type="checkbox" <% if (material.restricted === "Y") { %> checked <%} %>><strong>Check this box</strong> if the listing contains or may contain restricted materials',
      '</label>',
    '</div>',
  '</div>',
  '<br>',
  '<div class="form-group">',
    '<label for="measurements">Measurements</label>',
    '<br>',
    '<% _.each(_.keys(itemEnums.measurement), function (measure) { %>',
      '<% if (measure === "unit") { %>',
        'Measurements are in:&nbsp;',
      '<% } else if (measure === "shape") { %>',
        'Measured item is:&nbsp;',
      '<% } %>',
      '<% _.each(_.keys(itemEnums.measurement[measure]), function(item) { %>',
      '<label class="radio-inline">',
        '<input type="radio" name="<%= itemEnums.measurement[measure] %>"  <% if (item == measurement.unit || measurement.shape) {%> <%= "checked" %> <% } %> > <%= itemEnums.measurement[measure][item] %>',
          '<% if (measure === "unit") { %>',
            '<%= "(" + item + ")" %>',
          '<% } %>',
      '</label>',
      '<% }) %>',
      '<br>',
    '<% }) %>',
  '</div>',
  '<div class="form-group">',
    '<div class="row">',
      '<div class="col-md-6">',
        '<label for="length">Length:</label>',
        '<div class="input-group">',
          '<input type="text" class="form-control" id="length">',
          '<div class="input-group-addon">in</div>',
        '</div>',
      '</div>',
      '<div class="col-md-6">',
        '<label for="depth">Depth:</label>',
        '<div class="input-group">',
          '<input type="text" class="form-control" id="depth">',
          '<div class="input-group-addon">in</div>',
        '</div>',
      '</div>',
    '</div>',
    '<div class="row">',
      '<div class="col-md-6">',
        '<label for="height">Height:</label>',
        '<div class="input-group">',
          '<input type="text" class="form-control" id="height">',
          '<div class="input-group-addon">in</div>',
        '</div>',
      '</div>',
      '<div class="col-md-6">',
        '<label for="diameter">Diameter:</label>',
        '<div class="input-group">',
          '<input type="text" class="form-control" id="diameter">',
          '<div class="input-group-addon">in</div>',
        '</div> ',
      '</div>',
    '</div>',
  '</div>',
  '<div class="form-group">',
    '<label for="condition">Condition (select one)</label>',
    '<br>',
    '<% _.each(itemEnums.condition.description, function(cond){ %>',
    '<label class="radio-inline">',
      '<input type="radio" name="condition" <% if (cond === condition.description) { %> <%= "checked" %> <% } %> > <%= cond %>',
    '</label>',
    '<% }) %>',
  '</div>',
  '<button type="submit" class="btn btn-primary">Save</button>',
'</form>'
].join("\n");