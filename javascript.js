    let screen = document.getElementById("input")

        function input(x) {
            screen.value = screen.value + x;
        }

        function allclear() {
            screen.value = '';
        }

        function Del() {
            screen.value = screen.value.slice(0, -1);
        }

        function equal() {
            try {
                screen.value = eval(screen.value);
            }
            catch {
                screen.value = 'Error';
            }
        }

        $(document).ready(function () {
            $("#icon").click(function () {
                $("body").toggleClass("dark")
                $("#input").toggleClass("input-dark")
                $(".button").toggleClass("button-dark")
                $(".container").toggleClass("container-dark")


                var x = $("#icon").hasClass("fa-moon");

                if (x == true) {
                    $("#icon").removeClass("fa-moon");
                    $("#icon").addClass("fa-sun");
                }
                else {
                    $("#icon").removeClass("fa-sun");
                    $("#icon").addClass("fa-moon");
                }


            })
        })
