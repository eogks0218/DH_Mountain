import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../scss/Main.scss";
import $ from 'jquery';
import velocity from "velocity-animate";
import "velocity-animate/velocity.ui";  // 추가적으로 UI Pack이 필요하다면

// jQuery에 velocity 통합
$.fn.velocity = velocity;

export default function Main() {

    useEffect(() => {
        $(".open-overlay").click(function () {
            $(".open-overlay").css("pointer-events", "none");
            var overlay_navigation = $(".overlay-navigation"),
                top_bar = $(".bar-top"),
                middle_bar = $(".bar-middle"),
                bottom_bar = $(".bar-bottom");

            overlay_navigation.toggleClass("overlay-active");
            if (overlay_navigation.hasClass("overlay-active")) {
                top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
                middle_bar
                    .removeClass("animate-out-middle-bar")
                    .addClass("animate-middle-bar");
                bottom_bar
                    .removeClass("animate-out-bottom-bar")
                    .addClass("animate-bottom-bar");
                overlay_navigation
                    .removeClass("overlay-slide-up")
                    .addClass("overlay-slide-down");
                overlay_navigation.velocity("transition.slideLeftIn", {
                    duration: 300,
                    delay: 0,
                    begin: function () {
                        $("nav ul li").velocity("transition.perspectiveLeftIn", {
                            stagger: 150,
                            delay: 0,
                            complete: function () {
                                $("nav ul li a").velocity(
                                    {
                                        opacity: [1, 0]
                                    },
                                    {
                                        delay: 10,
                                        duration: 140
                                    }
                                );
                                $(".open-overlay").css("pointer-events", "auto");
                            }
                        });
                    }
                });
            } else {
                $(".open-overlay").css("pointer-events", "none");
                top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
                middle_bar
                    .removeClass("animate-middle-bar")
                    .addClass("animate-out-middle-bar");
                bottom_bar
                    .removeClass("animate-bottom-bar")
                    .addClass("animate-out-bottom-bar");
                overlay_navigation
                    .removeClass("overlay-slide-down")
                    .addClass("overlay-slide-up");
                $("nav ul li").velocity("transition.perspectiveRightOut", {
                    stagger: 150,
                    delay: 0,
                    complete: function () {
                        overlay_navigation.velocity("transition.fadeOut", {
                            delay: 0,
                            duration: 300,
                            complete: function () {
                                $("nav ul li a").velocity(
                                    {
                                        opacity: [0, 1]
                                    },
                                    {
                                        delay: 0,
                                        duration: 50
                                    }
                                );
                                $(".open-overlay").css("pointer-events", "auto");
                            }
                        });
                    }
                });
            }
        });
    }, []);

    return (
        <div className="Main-container">
            <div className="overlay-navigation">
                <nav role="navigation">
                    <ul>
                        <li>
                            <Link to="/SearchMountainPage" dataContent="산 검색하기">MOUNTAIN SEARCH</Link>
                        </li>
                        <li>
                            <Link to="/MountainListPage/1" dataContent="산 목록보기">LIST OF MOUNTAIN</Link>
                        </li>
                        <li>
                            <Link to="/FamousMountainPage" dataContent="대한민국 100대 명산">Korea's Top 100 Famous Mountains</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <section className="home">
                <div className="open-overlay">
                    <span className="bar-top"></span>
                    <span className="bar-middle"></span>
                    <span className="bar-bottom"></span>
                </div>
            </section>
        </div>
    );
}