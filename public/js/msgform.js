document.write(`
<div class="message-form" style="background-image: url('images/Form.png');">
    <form id="feedback-form" class="container " style="padding-top:70px; " action="/submit-feedback" method="POST">
      <div>
        <label for="name" style="padding-bottom: 5px;">Ім'я:</label>
      <input type="text" id="name" name="name" required minlength="4" maxlength="64" placeholder="Введіть Ваше ім'я" />
    </div>
    <div class="row" style="margin-top:20px;">
    <div class="col">
      <label for="phone" style="padding-bottom:5px;">Телефон:</label>
      <input type="tel" id="phone" name="phone" required minlength="4" maxlength="12" placeholder="Введіть Ваш телефон" />
    </div>
    <div class="col">
      <label for="email" style="padding-bottom:5px;">Електронна пошта:</label>
      <input type="email" id="email" name="email" required minlength="4" maxlength="64" placeholder="Введіть Вашу електронну пошту" />
    </div>
</div>
    <div style="margin-top:50px;">
      <label for="message" style="padding-bottom:5px;">Повідомлення:</label>
      <textarea id="message" name="message" cols="40" rows="5" placeholder="Напишіть коротке повідомлення про те, про що ви хотіли б поговорити з нами."></textarea>
    </div>
    <div class="message-btn-1">
      <button type="submit" class="message-btn">Відправити</button>
    </div>
    </form>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script>
      $(document).ready(function () {
        $("#feedback-form").submit(function (event) {
          event.preventDefault();

          const name = $("#name").val();
          const phone = $("#phone").val();
          const email = $("#email").val();
          const message = $("#message").val();

          $.ajax({
            url: "/submit-feedback",
            type: "POST",
            data: {
              name: name,
              phone: phone,
              email: email,
              message: message,
            },
            success: function (data) {
              alert("Дякуємо за зворотній зв'язок!");
            },
            error: function (xhr, status, error) {
              alert("Сталася помилка при відправці форми!");
              console.log(error);
            },
          });
        });
      });
    </script></div>`);