
// $.ajax({
//     url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
   

//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "HWlTHW4KHCkDCh2T3VN63Y4Ma"
      
//     }
    
// }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });


$.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "HWlTHW4KHCkDCh2T3VN63Y4Ma"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});


const promise = $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "HWlTHW4KHCkDCh2T3VN63Y4Ma"
    }
});

promise.then(
    // if successful
    (data)=>{
        console.log(data)
    },
    // if promise could not be resolved
    ()=>{
        console.log("Bad Request")
    }
)


$('form').on('submit', (event)=>{

    event.preventDefault();
    
    const userInput = $('unique_id[type="text"]').val()
    
    
    const promise = $.ajax({
        url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json'+ userInput
    })
    
    promise.then(
        (data)=>{
            $('#borough').html(data.borough)
            $('#descriptor').html(data.descriptor)
            $('#agency').html(data.agency)
            $('#resolution_description').html(data.resolution_description)    
    
        }
    )
    
    })





















































// $(()=>{
//     $.ajax({
//     url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json?unique_key=10693408'
//     }) .then(
//         (data)=>{
//             $('#borough').html(data.borough);
//             $('#descriptor').html(data.descriptor);
//             $('#agency').html(data.agency);
//             $('#resolution_description').html(data.resdesc);

//         },
//         ()=>{
//             console.log('bad');

//         }

//     );
// })



// $(()=>{
//     $('form').on('submit', (event)=>{

//         event.preventDefault();



//         $.ajax({
//             url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json?unique_key=10693408'

//         }) .then(
//             (data)=>{
//                 $('#borough').html(data.borough);
//                 $('#descriptor').html(data.descriptor);
//                 $('#agency').html(data.agency);
//                 $('#resolution_description').html(data.resdesc);
    
//             },
//             ()=>{
//                 console.log('bad');
    
//             }
    
//         );
//     })
// })



// $(()=>{
//     $('form').on('submit',(event)=>{
//         event.preventDefault();
//         const userInput = $('input[type="text"]').val();

//         $.ajax({
//             url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json?unique_key=10693408' + userInput
//         })
//     }).then(
//         (data)=>{
//             $('#borough').html(data.borough);
//             $('#descriptor').html(data.descriptor);
//             $('#agency').html(data.agency);
//             $('#resolution_description').html(data.resdesc);

//         },
//         ()=>{
//             console.log('bad')
//         }
//     );

   
// })