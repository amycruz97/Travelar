

 
 const sideNav = document.querySelector('.sidenav');
 M.Sidenav.init(sideNav, {});


 // SLIDER

  const slider = document.querySelector('.slider');
  M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 300,
      interval: 3000
  });

 //  AUTOCOMPLETE
 const ac = document.querySelector('.autocomplete');
 M.Autocomplete.init(ac, {
     data: {
         "London": null,
         "Mexico": null,
         "Hawaii": null,
         "California": null,
         "India": null,
         "Nigeria": null,
     }
 });

 // Material Boxes

 const mb =  document.querySelectorAll('.materialboxed');
 M.Materialbox.init(mb, {});

const ss = document.querySelectorAll('.scrollSpy');
M.ScrollSpy.init(ss, {});











 

