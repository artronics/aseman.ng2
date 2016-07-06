import { Meteor } from 'meteor/meteor';
import {FileService} from './FileService';
Meteor.startup(() => {
  console.log('kir');
  new FileService();
  // code to run on server at startup
});
