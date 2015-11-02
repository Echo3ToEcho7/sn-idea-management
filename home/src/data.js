var spaces = new GlideRecord('sn_idea_management_idea_space');
spaces.orderBy('short_desciption');
spaces.query();

var data = {};
data.spaces = [];

var ideaAgg;
var count = 0;

while (spaces.next()) {
  count = 0;
  ideaAgg = new GlideAggregate('idea');
  ideaAgg.addQuery('sn_idea_management_idea_space', '=', '' + spaces.sys_id);
  ideaAgg.addAggregate('COUNT');
  ideaAgg.query();
  if (ideaAgg.next()) {
    count = +ideaAgg.getAggregate('COUNT');
  }

  data.spaces.push({
    sys_id: spaces.getValue('sys_id'),
    number: spaces.getValue('number'),
    title: spaces.getValue('short_description'),
    description: spaces.getValue('description'),
    idea_count: count
  });
}

new global.JSON().encode(data);
