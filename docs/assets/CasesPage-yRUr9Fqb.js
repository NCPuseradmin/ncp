import{E as k,r as d,h as C,g as x,a as c,o as n,c as l,d as r,b as o,F as v,z as $,e as w,m as D,A as V,t as h}from"./index-UmfenGTi.js";const N={class:"flex w-full flex-col gap-2 px-64 pb-4"},z={class:"my-4 flex h-96 flex-row items-end justify-between rounded-2xl bg-gradient-to-b from-blue-300 to-blue-400 p-8 shadow-xl"},B=o("div",{class:"flex flex-col"},[o("span",{class:"text-4xl font-semibold leading-none"},"Neuro"),o("span",{class:"text-xl font-medium leading-none"},"Description here")],-1),L={key:0,class:"flex items-center justify-center py-4"},S={key:1,class:"flex items-center justify-center py-4"},j=o("h2",null,"No cases created",-1),E=[j],M={__name:"CasesPage",setup(F){const m=k(),i=d(null),g=d(!0);C(()=>{x.get(`https://ncp-api-uzr5.onrender.com/case-scenarios/get-all/${m.params.category}`).then(s=>{i.value=s.data,g.value=!1})});const u=d(!1),a=d({state:!1,id:null,index:null,toggle(s,e){this.state=!this.state,this.id=s,this.index=e},confirm(){this.state=!this.state,h.add({msg:"Deleting Case",duration:1e3}),u.value=!0,x.delete(`https://ncp-api-uzr5.onrender.com/case-scenarios/delete/${m.params.category}/${this.id}`).then(()=>{i.value.splice(this.index,1),u.value=!1,h.add({msg:"Case deleted",duration:4e3})})}});return(s,e)=>{const f=c("VIconButton"),_=c("VLoader"),b=c("router-link"),y=c("VDialog");return n(),l(v,null,[r(f,{onClick:e[0]||(e[0]=t=>s.$router.go(-1)),icon:"arrow_back",variant:"ghost",size:"lg",class:"!sticky left-52 top-[100px] !w-fit"}),o("div",N,[o("div",z,[B,o("button",{onClick:e[1]||(e[1]=t=>s.$router.push({name:"admin create case",params:{category:"neuro"}})),class:"rounded-full px-4 py-2 text-2xl font-medium transition-colors hover:bg-blue-950/10"}," + New Case ")]),g.value?(n(),l("div",L,[r(_,{size:"32px",thickness:"2px"})])):i.value.length===0?(n(),l("div",S,E)):(n(!0),l(v,{key:2},$(i.value,(t,p)=>(n(),l("div",{key:t.id,class:"flex flex-row items-center rounded-2xl border border-neutral-400 pr-10 transition-colors hover:bg-neutral-400/20"},[r(b,{to:{name:"admin edit case",params:{number:p+1,id:t.id,category:"neuro"}},class:"grow py-4 pl-10 text-xl font-medium"},{default:w(()=>[D("Case Scenario "+V(p+1),1)]),_:2},1032,["to"]),r(f,{onClick:I=>a.value.toggle(t.id,p),disabled:u.value,variant:"ghost",color:"error",size:"lg",icon:"delete",class:"shrink-0"},null,8,["onClick","disabled"])]))),128))]),r(y,{"go-open":a.value.state,"onUpdate:goOpen":e[2]||(e[2]=t=>a.value.state=t),header:"Case Deletion",body:`Do you want to delete Case Scenario ${a.value.index+1}?`,"cancel-label":"No","confirm-label":"Yes",onConfirm:e[3]||(e[3]=t=>a.value.confirm())},null,8,["go-open","body"])],64)}}};export{M as default};