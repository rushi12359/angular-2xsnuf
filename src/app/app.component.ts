import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 topics=['Angular','React','vue'];

 topicHasError=true;
  
  userModel = new User('Rushi',"rushi@gmail.com",765432,'default','morning',true);

  validateTopic(value)
  {
    if (value === 'default' )
    {
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }

  onSubmit()
  {
    console.log(this.userModel);
  }
}

