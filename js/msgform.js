document.write(`
<div class="message-form" style="background-image: url('images/Form.png');">
        <div class="container" style="padding-top: 50px;">
          <div>
            <label for="name">Name</label>

            <input type="text" id="name" name="name" required
                minlength="4" maxlength="64" placeholder="Enter your name">

          </div>

          <div class="row" style="margin-top:20px;">
            <div class="col">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone"
              required minlength="4" maxlength="64" placeholder="Enter your phone">
            </div>
            <div class="col">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required minlength="4" maxlength="64" placeholder="Enter your email">
            </div>
          </div>

          <div style="margin-top:50px;">
            <label for="about">What do you want to say about?</label>
            <!--<input style="height:150px; padding-top: 0px; word-wrap: normal;" type="text" id="about" name="about" required minlength="4" maxlength="512" placeholder="Enter a brief message what you’d like to talk to us about">-->
            <textarea id="about" name="about" cols="40" placeholder="Enter a brief message what you’d like to talk to us about"></textarea>
          </div>
          <div style="display:flex; justify-content: end; align-items: center; padding-top: 30px;"><a class="message-btn">send it</a></div>
        </div>
      </div>`);