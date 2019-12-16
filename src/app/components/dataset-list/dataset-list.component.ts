import { Component, Input, OnInit } from '@angular/core';
import { Repository } from './repository.model';

@Component({
  selector: 'fc-dataset-list',
  templateUrl: 'dataset-list.component.html',
  styleUrls:  ['dataset-list.component.css']
})
export class DatasetListComponent implements OnInit {
  // carries all available repositories in the system
  public dataRepositoryList: Repository[] = [];
  // carries selected repositories by the user
  public selectedRepositories: Repository[] = [];
  public searchText: String = '';

  ngOnInit() {
    // initialize repository list
    /**
     * The list has been hard coded. However, in real scenario a restful endpoint 
     * should be consumed to get this data from server
     */
    this.dataRepositoryList = [
      { data: 'New York Repository', source:'70,000', lastUpdate: '8/9/2019' },
      { data: 'Amsterdam Repository', source:'63,000', lastUpdate: '8/9/2019' },
      { data: 'Pune Repository', source:'22,000', lastUpdate: '8/9/2019' },
      { data: 'Mumbai Repository', source:'55,000', lastUpdate: '8/9/2019' },
      { data: 'Serbia Repository', source:'53,000', lastUpdate: '8/9/2019' },
      { data: 'England Repository', source:'26,000', lastUpdate: '8/9/2019' },
      { data: 'Miami Repository', source:'77,000', lastUpdate: '8/9/2019' },
      { data: 'Paris Repository', source:'98,000', lastUpdate: '8/9/2019' }
    ]
  }

  onRepoSelectedUnselected( currentRepo: Repository ) {
    const repoIndex = this.selectedRepositories.findIndex( repo => repo.data === currentRepo.data);
    // if currentRepo is not already in the list then user wants to add the current repo in the list 
    // otherwise user chose to remove
    repoIndex === -1 ? this.selectedRepositories.push( currentRepo ) : this.selectedRepositories.splice( repoIndex, 1);
  }
}
