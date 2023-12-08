class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}
class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir (){
     videoPlay(this.videoID);
    }
    pausar(){
     videoStop(this.videoID);
    }
}

class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name (){
      return this._name;
    }
    set name(nuevoNombre) {
        if (nuevoNombre ===  "Curso Malito de Programación Básica") {
            console.error("wEB...NO");
        } else{
         this._name = nuevoNombre;
        }
    }
   
}

const cursoProgBasica = new Course ({
    name: "Curso Gratis de Programación Básica", 
    isFree: true,
});
const cursoDefinitivoHTML = new Course ({
    name: "Curso Definitivo de HTML y CSS",
})
const cursoPracticoHTML = new Course ({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
})


class LearningPaths{
    constructor({
     name, 
     courses = [],
    }){
     this.name = name;
     this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({ 
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});
const escuelaData = new LearningPaths({ 
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso DataViz",
    ],
});
const escuelaVgs = new LearningPaths({ 
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});




class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
       learningPaths = [],
    }) {
       this.name = name;
       this.email = email;
       this.username = username;
       this.socialMedia = {
        twitter,
        instagram,
        facebook,
       };
       this.approvedCourses = approvedCourses;
       this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent){
      const comment = new Comment ({
        content: commentContent,
        studentName: this.name,
      })
      comment.publicar();
    }
}


class FreeStudent extends Student{
    constructor(props){
      super(props);
    }

    approveCourse(newCourse){
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else{
            console.warn("Lo sentimos," + this.name + "solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
      }

    approveCourse(newCourse){
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else{
            console.warn("Lo sentimos," + this.name + ",no puedes tomar cursos en inglés");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
      }

    approveCourse(newCourse){
      
      this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
      }

    approveCourse(newCourse){
      this.approvedCourses.push(newCourse);
    }
    
    publicarComentario(commentContent){
        const comment = new Comment ({
          content: commentContent,
          studentName: this.name,
          studentRole: "profesor",
        })
        comment.publicar();
      }
}





const Juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@.com",
    twitter:  "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const Miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitohappy",
    email: "miguelitohappy@.com",
    instagram:  "miguelito_happy",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});

const Freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "Freddyprofe",
    email: "freddyprofe@.com",
    instagram:  "Freddy_profe",
    
});