import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/AppState';
import { LoadingStates } from 'src/store/loading/LoadingStates';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  loadingState$: Observable<LoadingStates>

  constructor(
    private store: Store<AppState>
    
    ) { }

  ngOnInit() {

    this.loadingState$ = this.store.select('loading')

  }

}
