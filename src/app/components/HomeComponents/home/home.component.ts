import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  openTab(tabId: string): void {
    // Hide all tab contents
    const tabContents: NodeListOf<Element> = document.querySelectorAll('.home-content');
    console.log(tabContents);
    tabContents.forEach((content: Element) => {
        content.classList.remove('active');
    });

    const tab: NodeListOf<Element> = document.querySelectorAll('.tab');
    console.log(tab);
    tab.forEach((content: Element) => {
        content.classList.remove('active');
    });

    const selectedTabContent: Element | null = document.getElementById(tabId);
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }

    const selectedTab: Element | null = document.getElementById("button-"+tabId);
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
  }

}

