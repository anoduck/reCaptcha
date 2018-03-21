$(document).ready(function(){
	var storeItem=[];
  var img6_1,m,n,o,p,q,r,coun1="off",coun2="off",coun3="off",coun4="off",coun5="off",coun6="off",a="football.png";
  var item1,item2,item3,item4,item5,item6,img1,img2,img3,img4,img5,img6;
	$("#random").click(function(){
		var myPix = new Array("volleyball.png","football.png","cricket.png");
    var randomNum1 = Math.floor(Math.random() * myPix.length);
    var random_image1 = myPix[randomNum1];
		$("#img1").html("");
    $("#img1").append("<input id='checkbox' type='checkbox'><img src='" + random_image1 + "' id='img_size'/>");
    $("#img1").find('img').each(function() {
      img1 = $(this);
      item1 = img1.attr("src");
      $( img1 ).click(function(){
        $(img1).siblings('input').attr('checked', true);
        var count1 = $('input:checked');
        coun1 = count1.val();
        storeItem.push(item1);
        console.log(coun1);
      });
    });
    var randomNum2 = Math.floor(Math.random() * myPix.length);
    var random_image2 = myPix[randomNum2];
    $("#img2").html("");
    $("#img2").append("<input id='checkbox' type='checkbox'><img src='" + random_image2 + "' id='img_size'/>");
    $("#img2").find('img').each(function() {
      img2 = $(this);
      item2 = img2.attr("src");
      $( img2 ).click(function(){
        $(img2).siblings('input').attr('checked', true);
        var count2 = $('input:checked');
        coun2 = count2.val();
        storeItem.push(item2);
        console.log(coun2);
      });
    });
    var randomNum3 = Math.floor(Math.random() * myPix.length);
    var random_image3 = myPix[randomNum3];
    $("#img3").html("");
    $("#img3").append("<input id='checkbox' type='checkbox'><img src='" + random_image3 + "' id='img_size'/>");
    $("#img3").find('img').each(function() {
      img3 = $(this);
      item3 = img3.attr("src");
      $( img3 ).click(function(){
        $(img3).siblings('input').attr('checked', true);
        var count3 = $('input:checked');
        coun3 = count3.val();
        storeItem.push(item3);
        console.log(coun3);
      });
    });
    var randomNum4 = Math.floor(Math.random() * myPix.length);
    var random_image4 = myPix[randomNum4];
    $("#img4").html("");
    $("#img4").append("<input id='checkbox' type='checkbox'><img src='" + random_image4 + "' id='img_size'/>");
    $("#img4").find('img').each(function() {
      var img4 = $(this);
        item4 = img4.attr("src");
        $( img4 ).click(function(){
          $(img4).siblings('input').attr('checked', true);
          var count4 = $('input:checked');
          coun4 = count4.val();
          storeItem.push(item4);
          console.log(coun4);
        });
     });
    var randomNum5 = Math.floor(Math.random() * myPix.length);
    var random_image5 = myPix[randomNum5];
    $("#img5").html("");
    $("#img5").append("<input id='checkbox' type='checkbox'><img src='" + random_image5 + "' id='img_size'/>");
    $("#img5").find('img').each(function() {
      var img5 = $(this);
      item5 = img5.attr("src");
      $(img5).click(function(){
        $(img5).siblings('input').attr('checked', true);
        var count5 = $('input:checked');
        coun5 = count5.val();
        storeItem.push(item5);
        console.log(coun5);
      });
    });
    var randomNum6 = Math.floor(Math.random() * myPix.length);
    var random_image6 = myPix[randomNum6];
    $("#img6").html("");
    $("#img6").append("<input id='checkbox' type='checkbox'><img src='" + random_image6 + "' id='img_size'/>");
    $("#img6").find('img').each(function() {
      var img6 = $(this);
      item6 = img6.attr("src");     
      $(img6).click(function(){
        $(img6).siblings('input').attr('checked', true);
        var count6 = $('input:checked');
        coun6 = count6.val();
        storeItem.push(item6);
        console.log(coun6);
      });
    });
  });
    var storeCondition = [];
    var flag = 0;
    var checked = 'input:unchecked';
    $("#check_football").click(function(){
      for(var i=0 ; i<storeItem.length ; i++) {
        if ( a === storeItem[i]) {
          storeCondition[i] = true;
        }
        else{
        storeCondition[i] = false;
        }
      }
      for( var i=0 ; i<storeCondition.length ; i++ ) {
        if ( storeCondition[i] == false) {
          flag=1;
        }
      }
      if(coun1=="off" && coun2=="off" && coun3=="off" && coun4=="off" && coun5=="off" && coun6=="off"){
        alert("access denied");
      }else{
        if(flag == "1") {
          alert("access denied");
        } else{
          alert("you are re-directing to new page");
        }
      }
      storeCondition=[];
      storeItem=[];
      flag = 0;
    });
    $("#clear").click(function(){
      location.href="new.html";
    });
});