// (function(w,d) {
// FUNCTIONS
    // Returns arithmetic mean (average)
    let getMean = function (data) {
        return data.reduce(function (a, b) {
            return Number(a) + Number(b);
        }) / data.length;
    };
    // Returns standard deviation (std)
    let getSD = function (data) {
        let m = getMean(data);
        return Math.sqrt(data.reduce(function (sq, n) {
                return sq + Math.pow(n - m, 2);
            }, 0) / (data.length - 1));
    };
    const median = arr => {
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
      return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };
    // Returns the number(s) that is repeated most often on an array
    function mode(numbers) {
      // as result can be bimodal or multi-modal,
      // the returned result is provided as an array
      // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
      var modes = [], count = [], i, number, maxIndex = 0;

      for (i = 0; i < numbers.length; i += 1) {
          number = numbers[i];
          count[number] = (count[number] || 0) + 1;
          if (count[number] > maxIndex) {
              maxIndex = count[number];
          }
      }

      for (i in count)
          if (count.hasOwnProperty(i)) {
              if (count[i] === maxIndex) {
                  modes.push(Number(i));
              }
          }

      return modes;
    }
    // Returns smalleest and biggest number on an array
    function range(numbers) {
        numbers.sort();
        return [numbers[0], numbers[numbers.length - 1]];
    }

    function makeUL(array) {
        // Create the list element:
        var list = document.createElement('ul');
        //list.className = "w3-ul w3-border";

        for(var i = 0; i < array.length; i++) {
            // Create the list item:
            var item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));

            // Add it to the list:
            list.appendChild(item);
        }

        // Finally, return the constructed list:
        return list;
    }

    function divideIt(json1, json2, factor){
      var statistics = {};
      for (var p in json1) {
        for (var m in json2) {
          if( json1.hasOwnProperty(p) && json2.hasOwnProperty(m)) {
            if(p == m) {
              if(json2[m].total_cases != -99999){
                statistics[p] = json2[m].total_cases * factor / json1[p];
              } else {
                statistics[p] = 0;
              }
            }
          }
        }
      }
      return statistics;
    }

    // Returns max of an array
    function getMax(data){
        var max=-1;
        for (let key in data) {
            if(parseInt(data[key], 10) > max){
                max = data[key];
            }
        }

        return max;
    }
    // Returns max of an total_cases
    function getMaxTotal(virusData){
        var max=-1;
        for (let key in virusData) {
            if(parseInt(virusData[key].total_cases, 10) > max){
                max = virusData[key].total_cases;
            }
        }

        return max;
    }

    function ISO8601_week_no(dt) {
       var tdt = new Date(dt.valueOf());
       var dayn = (dt.getDay() + 6) % 7;
       tdt.setDate(tdt.getDate() - dayn + 3);
       var firstThursday = tdt.valueOf();
       tdt.setMonth(0, 1);
       if (tdt.getDay() !== 4)
         {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
          }
       return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    }

    function weeklyGR1() {
      weekly_data = []
      //init array
      for(var i=0; i<ISO8601_week_no(new Date()); i++){
        weekly_data.push(0);
      }
      for(var i=0; i<x_cases.length; i++){
        weekly_data[ISO8601_week_no(x_cases[i])]+=y_cases[i];
      }
      //convert weekly data per million cases
      /*for(var i=0; i<weekly_data.length; i++){
        weekly_data[i]=(weekly_data[i]*1000000) / 10434536;
      }*/
      return weekly_data;
    }

    function weeklyGR2() {
      weekly_data = []
      //init array
      for(var i=0; i<ISO8601_week_no(new Date()); i++){
        weekly_data.push(0);
      }
      for(var i=0; i<x_deaths.length; i++){
        weekly_data[ISO8601_week_no(x_deaths[i])]+=y_deaths[i];
      }
      //convert weekly data per million cases
      /*for(var i=0; i<weekly_data.length; i++){
        weekly_data[i]=(weekly_data[i]*1000000) / 10434536;
      }*/
      return weekly_data;
    }

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    // Functionality on TABS click
    function openTab(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";


    }

// })(window, document);
