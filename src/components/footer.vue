<template>
      <footer class="site-footer">
      <div class="container">
        <div>
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, deleniti impedit. Minus repellat quidem consequuntur repellendus, itaque suscipit quas, accusamus minima eos optio consectetur distinctio sed quod accusantium asperiores fugit.
            Quia alias debitis dolores sapiente ipsam rerum tenetur, odit corporis tempora voluptate odio id natus nulla modi sint non, incidunt eaque recusandae. Pariatur cumque nostrum dolores perspiciatis, ut perferendis dignissimos.</p>
          </div>

          <div>
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><RouterLink class="routerlink" to="/">Home</RouterLink></li>
              <li><RouterLink class="routerlink" to="/about">About Us</RouterLink></li>
              <li><RouterLink class="routerlink" to="/contact">Contact Us</RouterLink></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div>
          <div>
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <RouterLink class="routerlink" to="#">Navab Esfahani</RouterLink>.
            </p>
          </div>
        </div>
      </div>
</footer>
</template>
<style>
.routerlink {
  color: #737373;
}
.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.copyright-text
{
  margin:0;
  color: white;
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
}
</style>