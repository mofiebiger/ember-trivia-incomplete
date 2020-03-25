import Route from "@ember/routing/route";

export default class QuestionRoute extends Route {
  // async model(params) {
  //   let response = await fetch(`/api/${params.rental_id}.json`);
  //   let { data } = await response.json();
  //
  //   return data.map(model => {
  //     let { id, attributes } = model;
  //     let type;
  //     return { id, type, ...attributes };
  //   });
  // }
}
