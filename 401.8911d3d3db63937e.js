"use strict";(self.webpackChunkpokemon_scarlet_violet=self.webpackChunkpokemon_scarlet_violet||[]).push([[401],{8401:(D,_,l)=>{l.r(_),l.d(_,{SuggestedBuildsModule:()=>j});var g=l(4755),c=l(9114),v=l(8097),p=l(1728),o=l(9401),C=l(2190),f=l(2342),T=l(9812),u=l(3044),y=l(1542),e=l(2223),r=l(5580),Z=l(4551);let k=(()=>{class i{get pokemonMoves(){return this.pokemonForm.controls.moves}constructor(t,n){this._dialogRef=t,this._snackbar=n,this.stats=u.Nj,this.abilities=u.RS.map(a=>a.name),this.natures=u.mX,this.heldItems=u.GP,this.moves=u.n2,this.types=u.Yj,this.pokemonList=u.GG.sort((a,s)=>a.name<s.name?-1:a.name<s.name?1:0),this.reorder=!1,this._abilities=u.RS.map(a=>a.name),this.pokemonForm=new o.cw({id:new o.NI(null),pokemon:new o.NI(null,[o.kI.required]),primaryType:new o.NI(null),secondaryType:new o.NI(null),heldItem:new o.NI(null),ability:new o.NI(null,o.kI.required),nature:new o.NI(null,o.kI.required),teraType:new o.NI(null,o.kI.required),moves:new o.Oe([new o.NI(null,o.kI.required),new o.NI(null),new o.NI(null),new o.NI(null)],o.kI.required),ev1:new o.NI(null),ev2:new o.NI(null),ev3:new o.NI(null),notes:new o.NI(null),additionalNotes:new o.NI(null)})}ngOnInit(){this.pokemonForm.get("pokemon")?.valueChanges.subscribe(t=>{t.value?.abilities?(this.abilities=t.value.abilities,t.value.hiddenAbilities&&(this.abilities=this.abilities.concat(t.value.hiddenAbilities.map(n=>`${n} (HA)`)))):this.abilities=this._abilities})}reorderMoves(){this.reorder=!0}convertToJson(){if(this.pokemonMoves.controls.filter(n=>n.value).length<1)this.pokemonMoves.controls[0].setErrors({required:!0});else{if(this.pokemonForm.invalid)return(0,y.AL)(),void this.pokemonForm.markAllAsTouched();try{const n=this._convertFormToPokemon(this.pokemonForm);console.log(JSON.stringify(n,null,2))}catch{this._snackbar.open("Error trying to save pokemon. Data invalid.","OK",{duration:3e3})}}}_convertFormToPokemon(t){let n={id:t.get("id")?.value,name:t.get("pokemon")?.value.value?.name,primaryType:t.get("pokemon")?.value.value.primaryType,secondaryType:t.get("pokemon")?.value.value.secondaryType,heldItem:t.get("heldItem")?.value?.value?.name,ability:t.get("ability")?.value.value,nature:t.get("nature")?.value.value,teraType:t.get("teraType")?.value.value,effortValues:[],notes:t.get("notes")?.value,additionalNotes:t.get("additionalNotes")?.value};n.ability.includes("HA")&&(n.ability=n.ability.replace(" (HA)",""));const a=this.pokemonMoves.controls;a&&(n.moves=a.filter(h=>h.value).map(h=>h.value.name));const s=t.get("ev1")?.value?.value;s&&n.effortValues.push({name:s,value:252});const m=t.get("ev2")?.value?.value;m&&n.effortValues.push({name:m,value:252});const x=t.get("ev3")?.value?.value;return x&&n.effortValues.push({name:x,value:4}),delete n.nationalDex,delete n.paldeaDex,delete n.id,n.notes||delete n.notes,n.additionalNotes||delete n.additionalNotes,n}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.so),e.Y36(f.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["psv-add-suggested-raider"]],decls:39,vars:11,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"dialog-row"],[1,"dialog-column"],["controlName","pokemon","label","Pokemon",3,"items"],["controlName","teraType","label","Tera Type",3,"items"],["controlName","heldItem","label","Held Item",3,"items"],["controlName","ability","label","Ability",3,"items"],["controlName","nature","label","Nature",3,"items"],["formType","array","controlName","moves","label","Move",3,"items","orderable"],["controlName","ev1","label","Primary (252)",3,"items"],["controlName","ev2","label","Secondary (252)",3,"items"],["controlName","ev3","label","Leftover (4)",3,"items"],["appearance","outline"],["matInput","","formControlName","notes"],["matInput","","formControlName","additionalNotes"],["mat-dialog-actions","","align","end"],["mat-button","","type","button","mat-dialog-close","","cdkFocusInitial",""],["mat-flat-button","","type","submit","color","accent",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Add Suggestion"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"h2"),e._uU(7,"Pokemon"),e.qZA(),e._UZ(8,"psv-input-combo-box",5),e.TgZ(9,"h2"),e._uU(10,"Basic Info"),e.qZA(),e._UZ(11,"psv-input-combo-box",6)(12,"psv-input-combo-box",7)(13,"psv-input-combo-box",8)(14,"psv-input-combo-box",9),e.qZA(),e.TgZ(15,"div",4)(16,"h2"),e._uU(17,"Moves"),e.qZA(),e._UZ(18,"psv-input-combo-box",10),e.TgZ(19,"h2"),e._uU(20,"EV Spread"),e.qZA(),e._UZ(21,"psv-input-combo-box",11)(22,"psv-input-combo-box",12)(23,"psv-input-combo-box",13),e.qZA()(),e.TgZ(24,"div",3)(25,"mat-form-field",14)(26,"mat-label"),e._uU(27,"Notes"),e.qZA(),e._UZ(28,"input",15),e.qZA()(),e.TgZ(29,"div",3)(30,"mat-form-field",14)(31,"mat-label"),e._uU(32,"Additional Notes"),e.qZA(),e._UZ(33,"textarea",16),e.qZA()()()(),e.TgZ(34,"div",17)(35,"button",18),e._uU(36,"Cancel"),e.qZA(),e.TgZ(37,"button",19),e.NdJ("click",function(){return n.convertToJson()}),e._uU(38,"Save"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("formGroup",n.pokemonForm),e.xp6(5),e.Q6J("items",n.pokemonList),e.xp6(3),e.Q6J("items",n.types),e.xp6(1),e.Q6J("items",n.heldItems),e.xp6(1),e.Q6J("items",n.abilities),e.xp6(1),e.Q6J("items",n.natures),e.xp6(4),e.Q6J("items",n.moves)("orderable",!0),e.xp6(3),e.Q6J("items",n.stats),e.xp6(1),e.Q6J("items",n.stats),e.xp6(1),e.Q6J("items",n.stats))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,c.KE,c.hX,v.Nt,p.lW,r.ZT,r.uh,r.xY,r.H8,Z.e],styles:["mat-form-field[_ngcontent-%COMP%], psv-input-combo-box[_ngcontent-%COMP%]{width:100%;padding-bottom:12px}.mdc-dialog__actions[_ngcontent-%COMP%]{justify-content:flex-end}.mdc-dialog__title[_ngcontent-%COMP%] + .mdc-dialog__content[_ngcontent-%COMP%], .mdc-dialog__header[_ngcontent-%COMP%] + .mdc-dialog__content[_ngcontent-%COMP%]{padding:20px 24px}h1.mdc-dialog__title[_ngcontent-%COMP%]{font-size:26px!important}.dialog-row[_ngcontent-%COMP%]{display:flex;gap:24px}@media (max-width: 700px){.dialog-row[_ngcontent-%COMP%]{flex-wrap:wrap}}.row[_ngcontent-%COMP%]{align-items:flex-start}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:12px 0}.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700}@media (max-width: 700px){.title-row[_ngcontent-%COMP%]{flex-wrap:wrap}}img[_ngcontent-%COMP%]{height:200px}.dialog-column[_ngcontent-%COMP%]{width:100%}"]}),i})();var A=l(9476),M=l(9346),b=l(9560),w=l(5565),O=l(1014);const P=["confirmAddToTeamDialog"];function N(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.filterSuggested="")}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}function S(i,d){if(1&i&&(e.ynx(0),e._uU(1," / "),e.TgZ(2,"span"),e.ALo(3,"lowercase"),e._uU(4),e.qZA(),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Tol(e.lcZ(3,3,t.secondaryType)),e.xp6(2),e.Oqu(t.secondaryType)}}function I(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div")(3,"span"),e.ALo(4,"lowercase"),e._uU(5),e.qZA(),e.YNc(6,S,5,5,"ng-container",18),e.qZA(),e.TgZ(7,"button",19),e.NdJ("click",function(){const s=e.CHM(t).$implicit,m=e.oxw(2);return e.KtG(m.openConfirmAddPokemon(s))}),e.TgZ(8,"mat-icon"),e._uU(9,"add_circle_outline"),e.qZA()()(),e._UZ(10,"psv-pokemon-display",20),e.qZA()}if(2&i){const t=d.$implicit,n=d.index,a=e.oxw().$implicit;e.Q6J("hidden",a.currentViewIndex!==n),e.xp6(3),e.Tol(e.lcZ(4,7,t.primaryType)),e.xp6(2),e.hij("",t.primaryType," "),e.xp6(1),e.Q6J("ngIf",t.secondaryType),e.xp6(4),e.Q6J("pokemon",t)("showStrongAgainst",!0)}}function J(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"div",12)(2,"button",13),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.KtG(s.currentViewIndex=s.currentViewIndex-1)}),e.TgZ(3,"mat-icon"),e._uU(4,"keyboard_arrow_left"),e.qZA()(),e.TgZ(5,"span"),e._uU(6),e.qZA(),e.TgZ(7,"button",14),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.KtG(s.currentViewIndex=s.currentViewIndex+1)}),e.TgZ(8,"mat-icon"),e._uU(9,"keyboard_arrow_right"),e.qZA()()(),e.YNc(10,I,11,9,"div",15),e.qZA()}if(2&i){const t=d.$implicit;e.xp6(2),e.Q6J("disabled",0===t.currentViewIndex),e.xp6(4),e.Oqu(t.name),e.xp6(1),e.Q6J("disabled",1===t.values.length||t.currentViewIndex+1===t.values.length),e.xp6(3),e.Q6J("ngForOf",t.values)}}function B(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"h2",21),e._uU(1," Add to Team"),e.qZA(),e.TgZ(2,"div",22),e._uU(3),e.qZA(),e.TgZ(4,"div",23)(5,"button",24),e._uU(6,"Cancel"),e.qZA(),e.TgZ(7,"button",25),e.NdJ("click",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.addToTeam(s))}),e._uU(8,"Confirm"),e.qZA()()}if(2&i){const t=d.$implicit;e.xp6(3),e.hij(" Do you want to add ",t.name," to your team? ")}}const F=T.Bz.forChild([{path:"",component:(()=>{class i{constructor(t,n,a){this._teamService=t,this._dialog=n,this._snackbar=a,this.confirmAddToTeamDialog={},this.suggested=[],this.filterSuggested=""}ngOnInit(){const t=[],n={};A.C.forEach(a=>{const s=a.name.split(" ").join("").toLowerCase();n[s]||(n[s]=[]),n[s].push(a)}),Object.keys(n).forEach(a=>{t.push({id:a,name:n[a][0].name,values:n[a],currentViewIndex:0})}),this.suggested=t}openAddSuggestedRaider(){this._dialog.open(k,{width:"660px"})}openConfirmAddPokemon(t){this._dialog.open(this.confirmAddToTeamDialog,{data:t})}addToTeam(t){this._teamService.updateTeamPokemon(t),this._snackbar.open("Pokemon added to team!  Check 'Your Pokemon' to view.","OK",{duration:3e3})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(M.I),e.Y36(r.uw),e.Y36(f.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["psv-suggested-builds"]],viewQuery:function(t,n){if(1&t&&e.Gf(P,5),2&t){let a;e.iGM(a=e.CRH())&&(n.confirmAddToTeamDialog=a.first)}},decls:19,vars:7,consts:[[1,"header"],[1,"subtitle"],[1,"header-actions"],["mat-flat-button","","color","primary",3,"click"],["appearance","outline",1,"search-input"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"raiders"],["class","raider",4,"ngFor","ngForOf"],["confirmAddToTeamDialog",""],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"raider"],[1,"other-builds"],["mat-icon-button","","matTooltip","View previous alternate build",3,"disabled","click"],["mat-icon-button","","matTooltip","View next alternate build",3,"disabled","click"],["class","pokemon",3,"hidden",4,"ngFor","ngForOf"],[1,"pokemon",3,"hidden"],[1,"actions"],[4,"ngIf"],["mat-icon-button","","matTooltip","Add to your team",1,"add-icon",3,"click"],[3,"pokemon","showStrongAgainst"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","","color","primary","mat-dialog-close","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"h1"),e._uU(3,"Suggested Raid Builds"),e.qZA(),e.TgZ(4,"h2",1),e._uU(5,"These are suggested builds to give you a starting point."),e.qZA()(),e.TgZ(6,"div",2)(7,"button",3),e.NdJ("click",function(){return n.openAddSuggestedRaider()}),e._uU(8,"Add"),e.qZA()()(),e.TgZ(9,"mat-form-field",4)(10,"mat-label"),e._uU(11,"Search Pokemon"),e.qZA(),e.TgZ(12,"input",5),e.NdJ("ngModelChange",function(s){return n.filterSuggested=s}),e.qZA(),e.YNc(13,N,3,0,"button",6),e.qZA(),e.TgZ(14,"div",7),e.YNc(15,J,11,4,"div",8),e.ALo(16,"filterBy"),e.qZA(),e.YNc(17,B,9,1,"ng-template",null,9,e.W1O)),2&t&&(e.xp6(12),e.Q6J("ngModel",n.filterSuggested),e.xp6(1),e.Q6J("ngIf",n.filterSuggested),e.xp6(2),e.Q6J("ngForOf",e.Dn7(16,3,n.suggested,"name",n.filterSuggested)))},dependencies:[g.sg,g.O5,o.Fj,o.JJ,o.On,c.KE,c.hX,c.R9,v.Nt,p.lW,p.RK,r.ZT,r.uh,r.xY,r.H8,b.Hw,w.L,g.i8,O.R],styles:[".raiders[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.raiders[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;align-items:center}.raiders[_ngcontent-%COMP%]   .raider-group[_ngcontent-%COMP%]{min-height:200px}.raiders[_ngcontent-%COMP%]   .raider[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;border-radius:4px;margin:8px;width:275px;min-height:200px}.raiders[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%]{color:#ffca28}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:8px}.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:1.3em;margin-right:.67em;flex-wrap:wrap;justify-content:flex-end}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:4px}.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:0;font-size:14px;color:#9e9e9e}.mdc-dialog__actions[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-end}.empty[_ngcontent-%COMP%]{height:300px}.other-builds[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid #ccc}.other-builds[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto 0}.pokemon[_ngcontent-%COMP%]{padding-left:16px}.search-input[_ngcontent-%COMP%]{width:888px}@media (min-width: 601px) and (max-width: 975px){.search-input[_ngcontent-%COMP%]{width:592px}}@media (min-width: 296px) and (max-width: 600px){.search-input[_ngcontent-%COMP%], .raiders[_ngcontent-%COMP%]   .raider[_ngcontent-%COMP%]{width:100%}}"]}),i})()}]);var q=l(9392),Q=l(7361);let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,F,o.u5,o.UX,c.lN,v.c,p.ot,f.ZX,r.Is,b.Ps,C.s,q.r,Q.D]}),i})()}}]);