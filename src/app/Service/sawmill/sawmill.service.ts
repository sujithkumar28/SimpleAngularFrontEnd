import { Sawmill } from './../../Model/Sawmill';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const allSawmills: Sawmill[] =
  [
    { id: 1, name: 'Sawmill 0654', city: 'berlin', country: 'germany', createdAt: '', updatedAt: '' },
    { id: 2, name: 'Sawmill 0655', city: 'delhi', country: 'india', createdAt: '', updatedAt: '' }
  ]
  ;
@Injectable({
  providedIn: 'root'
})
export class SawmillService {

  url;
  sawMills: Sawmill[];

  constructor(private httpClient: HttpClient) {
    this.url = 'https://sawmillapplication.herokuapp.com/sawmill/';
  }

  //Static data

  listStaticSawmill() {
    return allSawmills;
  }

  getStaticSawMill(id): Sawmill {

    const sawmillById = allSawmills.find(sawm => sawm.id == id);
    return sawmillById;
  }


  getSawMill(id): Sawmill {

    const sawmillById = allSawmills.find(sawm => sawm.id == id);
    return sawmillById;
  }

  //Http call
  listSawmill() {
    return this.httpClient.get<any>(this.url + "listAllSawmill");
  }

  getSawMillById(id) {
    return this.httpClient.get<any>(this.url + "getSawmill/" + id);
  }

}
