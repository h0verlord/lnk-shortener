import React from "react";
import { Meteor } from "meteor/meteor";
import { history } from "./../routes/AppRouter";

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilters from './LinksListFilters';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <LinksListFilters />
      <LinksList />
      <AddLink />
    </div>
  );
};

// export default class Link extends React.Component {
//   componentWillMount() {
//     if (!Meteor.userId()) {
//       history.replace("/");
//     }
//   }
//   render() {
//     return (
//       <div>
//         <PrivateHeader title= "Your Links" />
//         <LinksList />
//         <AddLink />
//       </div>
//     );
//   }
// }
