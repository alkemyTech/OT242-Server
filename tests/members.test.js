const app = require("../App");
const request = require("supertest");

// testing endpoints

// GET
describe("GET /members", () => {
  it("lista todos los miembros", (done) => {
    request(app)
      .get("/admin/members")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

// PATCH
describe("PATCH /members/:id", () => {
  it("actualiza un miembro existente", (done) => {

    const reqBody = {
      name: "updateTest",
      image: "updateTest",
    };

    request(app)
      .patch("/admin/members/2")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
    });

  });

  it("intenta actualizar un miembro con campos vacíos", (done) => {

    const reqBody = {
      name: "",
      image: "",
    };

    request(app)
      .patch("/admin/members/2")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
    });

  });

  it("intenta actualizar un miembro con campos inválidos", (done) => {

    const reqBody = {
      name: 14242,
      image: "updateTest",
    };

    request(app)
      .patch("/admin/members/2")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
    });

  });

  it("intenta actualizar un miembro inexistente", (done) => {

    const reqBody = {
      name: "updateTest",
      image: "updateTest",
    };

    request(app)
      .patch("/admin/members/idinexistente")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
    });

  });
});

// POST
describe("POST /members", () => {
  it("crea un miembro con campos válidos", (done) => {
    const reqBody = {
      name: "test",
      image: "test",
    };
    request(app)
      .post("/admin/members")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("intenta crear un miembro con campos incompletos", (done) => {
    const reqBody = {
      name: "",
      image: "",
    };
    request(app)
      .post("/admin/members")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((error) => {
        if (error) done(error);
        done();
      });
  });

  it("intenta crear un miembro con campos inválidos", (done) => {
    const reqBody = {
      name: 12345,
      image: "test",
    };
    request(app)
      .post("/admin/members")
      .send(reqBody)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((error) => {
        if (error) done(error);
        done();
      });
  });
});

// DELETE
describe("DELETE /members", () => {
  it("Elimina un miembro existente", (done) => {

    request(app)
      .delete("/admin/members/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("Intenta eliminar un miembro inexistente", (done) => {

    request(app)
      .delete("/admin/members/miembroinexistente")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
})