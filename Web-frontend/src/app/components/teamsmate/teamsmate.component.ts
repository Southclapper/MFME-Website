import { Component, OnInit } from '@angular/core';
import teammateList from '../../_files/team.json'
@Component({
  selector: 'app-teamsmate',
  templateUrl: './teamsmate.component.html',
  styleUrls: ['./teamsmate.component.scss']
})
export class TeamsmateComponent implements OnInit {

  public TeammatesList:{Name:string, Mail:string, Intro: string, Picture: string}[] = teammateList;

  constructor() { }

  ngOnInit(): void {
  }

}
