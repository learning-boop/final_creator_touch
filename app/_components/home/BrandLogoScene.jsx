"use client";
import {useEffect,useRef} from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
export default function LogoScene(){
 const host=useRef(null);
 useEffect(()=>{
  const container=host.current; let renderer,frame=0,disposed=false,model,baseScale=1;
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene=new THREE.Scene(); const camera=new THREE.PerspectiveCamera(38,1,.1,50);camera.position.z=5;
  const material=new THREE.MeshPhysicalMaterial({color:0xffffff,vertexColors:true,metalness:.25,roughness:.3,clearcoat:1,transparent:true,opacity:1});
  scene.add(new THREE.HemisphereLight(0xffffff,0x333333,1.4));
  const pink=new THREE.DirectionalLight(0xffffff,2.4);pink.position.set(-3,2,4);scene.add(pink);
  const blue=new THREE.DirectionalLight(0xffffff,1.5);blue.position.set(3,-1,2);scene.add(blue);
  try {renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));container.appendChild(renderer.domElement);}catch{return;}
  const resize=()=>{renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();};resize();
  Promise.all([new GLTFLoader().loadAsync("/assets/images/logo/creator-touch-3d.glb"),fetch("/assets/images/logo/creator-touch-regions.bin").then(r=>{if(!r.ok)throw new Error("Logo regions unavailable");return r.arrayBuffer();})]).then(([g,regionBuffer])=>{
   const regions=new Uint8Array(regionBuffer);
   if(disposed){g.scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();const m=Array.isArray(o.material)?o.material:[o.material];m.forEach(x=>x.dispose());}});return;}
   const object=g.scene;const box=new THREE.Box3().setFromObject(object);const center=box.getCenter(new THREE.Vector3());const size=box.getSize(new THREE.Vector3());
   object.position.sub(center);model=new THREE.Group();model.add(object);baseScale=2.5/Math.max(size.x,size.y,size.z);model.scale.setScalar(baseScale);model.scale.y*=-1;
   object.traverse(o=>{if(o.isMesh){const old=Array.isArray(o.material)?o.material:[o.material];old.forEach(m=>m.dispose());const count=o.geometry.attributes.position.count;if(regions.length!==count)throw new Error("Logo region count mismatch");const colors=new Float32Array(count*3);const palette=[new THREE.Color("#29A8DC"),new THREE.Color("#cc0066"),new THREE.Color("#169b19")];for(let i=0;i<count;i++)palette[regions[i]].toArray(colors,i*3);o.geometry.setAttribute("color",new THREE.BufferAttribute(colors,3));o.material=material;}});scene.add(model);container.classList.add("is-loaded");
  }).catch(()=>{});
  const clock=new THREE.Clock();
  const draw=()=>{if(disposed)return;frame=requestAnimationFrame(draw);if(document.hidden)return;const t=clock.getElapsedTime();if(model){const mobile=innerWidth<760;const progress=Math.min(scrollY/Math.max(innerHeight,1),1);if(mobile){const ms=baseScale*.5;model.scale.set(ms,-ms,ms);model.position.x=.55;model.position.y=-.25-progress*.15;material.opacity=Math.max(.2,.7-progress*1.2);}else{model.scale.set(baseScale,-baseScale,baseScale);model.position.x=1.45-progress*.45;model.position.y=0;material.opacity=1;}model.rotation.y=reduced?-.2:Math.sin(t*.22)*.22+scrollY*.00022;model.rotation.z=reduced?0:Math.sin(t*.16)*.045;}renderer.render(scene,camera);};draw();
  window.addEventListener("resize",resize);return()=>{disposed=true;cancelAnimationFrame(frame);window.removeEventListener("resize",resize);scene.traverse(o=>{if(o.isMesh)o.geometry.dispose();});material.dispose();renderer.dispose();renderer.domElement.remove();};
 },[]);
 return <div ref={host} className="cs-scene" aria-hidden="true"><img className="cs-logo-fallback" src="/assets/images/logo/creator-touch.png" alt="" /></div>;
}
