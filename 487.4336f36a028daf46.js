"use strict";(self.webpackChunkdsea_front_end=self.webpackChunkdsea_front_end||[]).push([[487],{1487:(P,c,d)=>{d.r(c),d.d(c,{AuthorizationModule:()=>_});var s=d(6895),r=d(433),a=d(3537),n=d(4650);function m(o,i){1&o&&(n.TgZ(0,"div"),n._uU(1,"Username is required"),n.qZA())}function l(o,i){if(1&o&&(n.TgZ(0,"div",12),n.YNc(1,m,2,0,"div",13),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.form.controls.username.errors)}}function f(o,i){1&o&&(n.TgZ(0,"div"),n._uU(1,"Password is required"),n.qZA())}function p(o,i){if(1&o&&(n.TgZ(0,"div",12),n.YNc(1,f,2,0,"div",13),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.form.controls.password.errors)}}const g=function(o){return{"is-invalid":o}},C=[{path:"login",component:(()=>{class o{constructor(t,e,u){this.formBuilder=t,this.route=e,this.router=u,this.form=this.formBuilder.group({username:["",r.kI.required],password:["",r.kI.required]}),this.loading=!1,this.submitted=!1}ngOnInit(){}get f(){return this.form.controls}onSubmit(){this.submitted=!0}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(r.qu),n.Y36(a.gz),n.Y36(a.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login-page"]],decls:17,vars:11,consts:[[1,"container"],[1,"card"],[1,"card-header"],["src","assets/images/DSEA LOGO.png","alt",""],[1,"card-body"],[1,"text"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","placeholder","Login",1,"form-control",3,"formControl","ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","placeholder","Password","formControlName","password",1,"form-control",3,"ngClass"],[1,"login-btn",3,"disabled"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4)(5,"div",5),n._uU(6,"Login"),n.qZA(),n.TgZ(7,"form",6),n.NdJ("ngSubmit",function(){return e.onSubmit()}),n.TgZ(8,"div",7),n._UZ(9,"input",8),n.YNc(10,l,2,1,"div",9),n.qZA(),n.TgZ(11,"div",7),n._UZ(12,"input",10),n.YNc(13,p,2,1,"div",9),n.qZA(),n.TgZ(14,"div")(15,"button",11),n._uU(16," Login "),n.qZA()()()()()()),2&t&&(n.xp6(7),n.Q6J("formGroup",e.form),n.xp6(2),n.Q6J("formControl",e.form.controls.username)("ngClass",n.VKq(7,g,e.submitted&&e.form.controls.username.errors)),n.xp6(1),n.Q6J("ngIf",e.submitted&&e.form.controls.username.errors),n.xp6(2),n.Q6J("ngClass",n.VKq(9,g,e.submitted&&e.form.controls.password.errors)),n.xp6(1),n.Q6J("ngIf",e.submitted&&e.form.controls.password.errors),n.xp6(2),n.Q6J("disabled",e.loading))},dependencies:[s.mk,s.O5,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,r.u],styles:[".container[_ngcontent-%COMP%]{height:100vh;width:100vw;display:flex}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:min(400px,100%);margin:auto}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;margin:auto;text-align:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{width:100%;color:#fff;background-color:#313467;border-radius:15px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%;padding:30px;font-size:20px;font-weight:600;text-align:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;padding:20px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;font-size:16px;padding:20px;margin-bottom:20px;border:none;border-bottom:2px solid #eeedf2;background-color:#313467;outline:none}button[_ngcontent-%COMP%]{display:block;background:#ffffff;color:#313467;border-radius:10px;width:100%;padding:10px;margin-top:30px}"]}),o})()},{path:"",pathMatch:"full",redirectTo:"login"}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[a.Bz.forChild(C),a.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.ez,h,r.UX,r.u5]}),o})()}}]);