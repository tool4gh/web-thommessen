$(function(){
    $.ajax({
      type : 'GET',
      url : 'data/csvjson.json',
      async : false,
      beforeSend : function(){/*loading*/},
      dataType : 'json',
      success : function(result) {
             $("#test_ID").empty(); //emtpy the UL before starting
 
             // **************** correction made to the line below ***********************
             $.each(result, function(i, v, d) {                        
 
             // **************** correction made to the line below ***********************
             /* $("#test_ID").append('<li><a href="/images/'+v.bilde+'.png" class="list-group-item d-flex list-group-item-action ><span class="badge  "><img src="images/userPlaceholder.png" style="height: 50px;" alt=""></span><div class="ms-2 me-auto"><div class="fw-bold">' + v.Navn +' </div> '+ v.Kontornr + '</div></a></li>');
              */                       // correction made here

            $("#test_ID").append( '<li><div class="card mb-3" style="max-width: 540px"><a href="/images/'+v.bilde+'.png"" class="list-group-item list-group-item-action"><div class="row g-0"><div class="col-md-4"><img src="/images/userPlaceholder.png" style="width: auto; padding: 0.4rem" class="img-fluid" alt="..."/></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">'+v.Navn+'</h5><p class="card-text">Title: IT Manager</p><p class="card-text">DeskNo: '+v.Kontornr+'</p><p class="card-text">Avdeling: '+v.avdeling+'</p></div></div></div></a></div></li>');
                             
         });
     }
    });
  });