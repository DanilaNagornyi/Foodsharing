import React, { useState, useEffect } from 'react'

function AuthorInfo({ id }) {
  const [author, setAuthor] = useState({})
  console.log(id);
  console.log(author);
  useEffect(() => {
    fetch(`http://localhost:3001/profile/${id}`)
      .then(res => res.json())
      .then(res => setAuthor(res))
  }, [])
  return (
    <>
      <main id="main">
        {/* <!-- ======= Our Skills Section ======= --> */}
        <section id="skills" class="skills section-bg">
          <div class="container">

            <div class="section-title" data-aos="fade-up">
              <h2>Об авторе</h2>
            </div>

            <div class="row">
              <div class="col-lg-6" data-aos="fade-right">
                <img src={author.photo} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>{author.name}&nbsp;{author.surname}</h3>
                <p>Свяжитесь с автором, позвонив ему по телефону, или отправьте личное сообщение</p>
                <a href={`tel:${author.phone}`}  >
                <i className="bi bi-phone"></i>
                   {author.phone}
                </a>
                <br />
                <p>
                  <a href={`https://t.me/${author.telegram}`}><i className="bi bi-telegram"></i> {author.telegram} </a>
                </p>


              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Our Skills Section --> */}

      </main>
    </>
  )
}

export default AuthorInfo
