// Ella Chambers
//Excersise Two

var scene, camera, renderer; //Global variables
var geometry, material, mesh;

  scene = new THREE.Scene(); // Create an empty scene
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 100, 10000);// Create a basic perspective camera
  renderer = new THREE.WebGLRenderer({antialias:true}); // Create a renderer with Antialiasing

  renderer.setClearColor("#000000");   // Configure renderer clear color
  renderer.setSize( window.innerWidth, window.innerHeight );  // Configure renderer size
  document.body.appendChild( renderer.domElement );   // Append Renderer to DOM

  var light1 = new THREE.AmbientLight(0xD1ADCB, 0.5); //Adding light
  scene.add(light1);
  var light2 = new THREE.PointLight(0xD1ADCB, 0.5);
  scene.add(light2);

  var geometry = new THREE.BoxGeometry(70, 70, 70); // creating the bottom left hand side box
  var material = new THREE.MeshPhongMaterial({
    color: 0xFF30E3,
    specular: 0xE8DAEF,
    shininess: 1000,
    lightMap: null,
    lightMapIntensity: 1,
    bumpMap: null,
    bumpScale: 1,
    normalMap: null,
    normalScale: 1,
    displacementMap: null,
    displacementScale: 1,
    displacementBias: 0,
    specularMap: null
  }); //Setting the material for each box // Setting the material for the box
  mesh = new THREE.Mesh( geometry, material ); //Setting the mesh
    mesh.position.z = -1000; //Setting the position of the box
    mesh.position.x = -35; //Using co-ordinates to place the box
    mesh.position.y = -30;
    scene.add( mesh ); // Add mesh to scene

  var geometry = new THREE.BoxGeometry(70, 70, 70); //Bottom right hand side box
  var material = new THREE.MeshPhongMaterial({
    color: 0xFF30E3,
    specular: 0xE8DAEF,
    shininess: 1000,
    lightMap: null,
    lightMapIntensity: 1,
    bumpMap: null,
    bumpScale: 1,
    normalMap: null,
    normalScale: 1,
    displacementMap: null,
    displacementScale: 1,
    displacementBias: 0,
    specularMap: null
  });
  mesh1 = new THREE.Mesh( geometry, material );
    mesh1.position.z = -1000;
    mesh1.position.x = 35;
    mesh1.position.y = -30;
    scene.add( mesh1 );

  var geometry = new THREE.BoxGeometry(70, 70, 70); //Top right hand side box
  var material = new THREE.MeshPhongMaterial({
    color: 0xFF30E3,
    specular: 0xE8DAEF,
    shininess: 1000,
    lightMap: null,
    lightMapIntensity: 1,
    bumpMap: null,
    bumpScale: 1,
    normalMap: null,
    normalScale: 1,
    displacementMap: null,
    displacementScale: 1,
    displacementBias: 0,
    specularMap: null
  });
  mesh2 = new THREE.Mesh( geometry, material );
    mesh2.position.z = -1000;
    mesh2.position.x = 35;
    mesh2.position.y = 40;
    scene.add( mesh2 );

  var geometry = new THREE.BoxGeometry(70, 70, 70); //Top left hand side box
  var material = new THREE.MeshPhongMaterial({
    color: 0xFF30E3,
    specular: 0xE8DAEF,
    shininess: 1000,
    lightMap: null,
    lightMapIntensity: 1,
    bumpMap: null,
    bumpScale: 1,
    normalMap: null,
    normalScale: 1,
    displacementMap: null,
    displacementScale: 1,
    displacementBias: 0,
    specularMap: null
  });
  mesh3 = new THREE.Mesh( geometry, material );
  mesh3.position.z = -1000;
  mesh3.position.x = -35;
  mesh3.position.y = 40;
  scene.add( mesh3);

  var radius = 250; //Setting the sizes for the larger sphere
  var segments = 10;
  var rings = 10;

  var radius1 = 200; //Setting the sizes for the smaller sphere
  var segments1 = 10;
  var rings1 = 10;

  var geometry = new THREE.SphereGeometry(radius, segments, rings); //creating sphere one
  var material = new THREE.MeshBasicMaterial({
    color: 0x99FF99, //choosing colour
    wireframe: true
  }); //Setting the material for the sphere

  var sphere = new THREE.Mesh(geometry, material); //setting cube for sphere one
  sphere.position.z = -1000
  camera.position.z = 150; //sets camera position
  scene.add(sphere); //adds cube to scene

  var geometry = new THREE.SphereGeometry(radius1, segments1, rings1); //creating sphere two
  var material = new THREE.MeshBasicMaterial({
    color: 0x0099FF,
    wireframe: true
  });

  var sphere1 = new THREE.Mesh(geometry, material);
  sphere1.position.z = -1000
  camera.position.z = 150;
  scene.add(sphere1);

var render = function () { // Render Loop
  requestAnimationFrame( render );

  sphere.rotation.x += 0.01;//sets the rotation of the sphere one
  sphere.rotation.y += 0.01;

  sphere1.rotation.x += 0.01; //Sphere two
  sphere1.rotation.y += 0.01;


  mesh.rotation.x += 0.02; //Continuously rotate the mesh //BL
  mesh.rotation.y += 0.02;

  mesh1.rotation.x += 0.02; //Continuously rotate the mesh //BR
  mesh1.rotation.y += 0.02;

  mesh2.rotation.x += 0.02; //Continuously rotate the mesh //TR
  mesh2.rotation.y += 0.02;

  mesh3.rotation.x += 0.02; //Continuously rotate the mesh //TL
  mesh3.rotation.y += 0.02;

  renderer.setClearColor("#000000");
  renderer.render(scene, camera);  // Render the scene
};

render();
