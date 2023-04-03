document.write(`
<div class="message-form" style="background-image: url('images/Form.png');">
        <div class="container" style="padding-top: 70px;">
          <div>
            <label for="name">Ім'я</label>

            <input type="text" id="name" name="name" required
                minlength="4" maxlength="64" placeholder="Введіть Ваше ім'я">

          </div>

          <div class="row" style="margin-top:20px;">
            <div class="col">
              <label for="phone">Телефон</label>
              <input type="tel" id="phone" name="phone"
              required minlength="4" maxlength="12" placeholder="Введіть Ваш телефон">
            </div>
            <div class="col">
              <label for="email">Пошта</label>
              <input type="email" id="email" name="email" required minlength="4" maxlength="64" placeholder="Введіть Вашу пошту">
            </div>
          </div>

          <div style="margin-top:50px;">
            <label for="about">What do you want to say about?</label>
            <!--<input style="height:150px; padding-top: 0px; word-wrap: normal;" type="text" id="about" name="about" required minlength="4" maxlength="512" placeholder="Enter a brief message what you’d like to talk to us about">-->
            <textarea id="about" name="about" cols="40" placeholder="Напишіть коротке повідомлення про те, про що ви хотіли б поговорити з нами."></textarea>
          </div>
          <div class="message-btn-1" style=""><a class="message-btn">надіслати</a></div>
        </div>
      </div>`);