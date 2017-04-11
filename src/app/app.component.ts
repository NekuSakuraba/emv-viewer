import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  tlvs;

  constructor(private http: Http){ }

  doit() {
    const promise = this.http.get('http://localhost:5000/parse/9f1001019f1101029f130103').toPromise();
    promise
      .then( response => {
        this.tlvs = response.json();

        for(var tlv in this.tlvs) {
          console.log( tlv + " -> " + this.tlvs[tlv] );
        }

      });

  }

}
