import React from "react";

import react from "../media/react.png";
import vue from "../media/vue.png";
import angular from "../media/angular.png";
import node from "../media/node.png";
import deno from "../media/deno.png";
import laravel from "../media/laravel.png";
import mongodb from "../media/mongodb.png";
import mysql from "../media/mysql.png";
import postgresql from "../media/postgresql.png";
import prisma from "../media/prisma.png";
import sequelize from "../media/sequelize.png";
import reactnative from "../media/reactnative.png";
import swift from "../media/swift.png";

import typescript from "../media/typescript.png";
import javascript from "../media/JS.png";
import php from "../media/php.png";
import github from "../media/github.png";
import { Bounce, Flip, Fade } from "react-reveal";

const Technologiespage = () => {
  return (
    <div className="technologies-page">
      <div className="container">
        <section className="services">
          <Bounce>
            <h3 className="h1 text-danger mt-5">
              Some of The Technologies In Our Toolbox
            </h3>
          </Bounce>
          <h4>First, we use Git for version control</h4>
          <div id="github" style={{ backgroundImage: `url(${github})` }}></div>
          <h3 className="h1 mt-5">Frontend</h3>
          <div className="technologies">
            <Flip>
              <div className="technology">
                <h4>React</h4>
                <div style={{ backgroundImage: `url(${react})` }}></div>
              </div>
            </Flip>
            <Flip>
              <div className="technology">
                <h4>Vue</h4>
                <div style={{ backgroundImage: `url(${vue})` }}></div>
              </div>
            </Flip>
            <Flip>
              <div className="technology">
                <h4>Angular</h4>
                <div style={{ backgroundImage: `url(${angular})` }}></div>
              </div>
            </Flip>
          </div>
          <h3 className="h1 mt-5">Backend</h3>
          <div className="technologies">
            <Flip>
              <div className="technology">
                <h4>Node</h4>
                <div
                  style={{ backgroundImage: `url(${node})`, width: "144px" }}
                ></div>
              </div>
            </Flip>
            <Flip>
              <div className="technology">
                <h4>Deno</h4>
                <div style={{ backgroundImage: `url(${deno})` }}></div>
              </div>
            </Flip>
            <Flip>
              <div className="technology">
                <h4>laravel</h4>
                <div style={{ backgroundImage: `url(${laravel})` }}></div>
              </div>
            </Flip>
          </div>
          <h3 className="h1 mt-5">Database</h3>
          <div className="technologies">
            <Flip>
              <div className="technology">
                <h4>MySQL</h4>
                <div
                  style={{ backgroundImage: `url(${mysql})`, width: "144px" }}
                ></div>
              </div>
            </Flip>
            <Flip>
              <div className="technology">
                <h4>PostgreSQL</h4>
                <div
                  style={{
                    backgroundImage: `url(${postgresql})`,
                    height: "89px",
                  }}
                ></div>
              </div>
            </Flip>
            <Flip>
              <div className="technology">
                <h4>MongoDB</h4>
                <div style={{ backgroundImage: `url(${mongodb})` }}></div>
              </div>
            </Flip>
          </div>
          <Fade bottom>
            <div className="extra-tech">
              <div>
                <h3 className="h1 mt-5">ORM</h3>
                <div className="technology">
                  <h4>Prisma</h4>
                  <div
                    style={{
                      backgroundImage: `url(${prisma})`,
                      width: "144px",
                    }}
                  ></div>
                </div>
                <div className="technology">
                  <h4>Sequelize</h4>
                  <div
                    style={{
                      backgroundImage: `url(${sequelize})`,
                      height: "233px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="h1 mt-5">Mobile</h3>
                <div className="technology">
                  <h4>React Native</h4>
                  <div
                    style={{
                      backgroundImage: `url(${reactnative})`,
                      width: "144px",
                    }}
                  ></div>
                </div>
                <div className="technology">
                  <h4>Swift</h4>
                  <div
                    style={{
                      backgroundImage: `url(${swift})`,
                      height: "233px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="h1 mt-5">Languages</h3>
                <div className="technology">
                  <h4>JavaScript</h4>
                  <div
                    style={{
                      backgroundImage: `url(${javascript})`,
                      height: "89px",
                    }}
                  ></div>
                </div>
                <div className="technology">
                  <h4>TypeScript</h4>
                  <div
                    style={{
                      backgroundImage: `url(${typescript})`,
                      height: "89px",
                    }}
                  ></div>
                </div>
                <div className="technology">
                  <h4>PHP</h4>
                  <div
                    style={{
                      backgroundImage: `url(${php})`,
                      height: "233px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </Fade>
          <h3 className="h1">
            This is a brief overview. There are way more technologies at the
            tips of our hands.
          </h3>
        </section>
      </div>
    </div>
  );
};

export default Technologiespage;
