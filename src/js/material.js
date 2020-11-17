import {
    MDCTopAppBar
  } from '@material/top-app-bar';
  import {
    MDCDrawer
  } from "@material/drawer";
  
  // Instantiation
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new MDCTopAppBar(topAppBarElement);
  
  
  
  const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
  
  const listEl = document.querySelector('.mdc-drawer .mdc-list');
  const mainContentEl = document.querySelector('.main-content');
  
  listEl.addEventListener('click', (event) => {
    goto(event)
    drawer.open = !drawer.open;
  });
  
  document.body.addEventListener('MDCDrawer:closed', () => {
    
  });
  
  
  topAppBar.setScrollTarget(document.getElementById('main-content'));
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
  
  console.log("Loaded drawer")