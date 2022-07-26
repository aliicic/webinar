<template>
  <div>
    <div class="container-fluid">
      <div class="row webinar-live">
        <div class="col-lg-1  webinar-live__tab" v-if="!chatStatus">
          <div class="webinar-live__logo">
            <img src="~/static/icon.png" alt="" />
          </div>
          <div class="webinar-live__tabs-box d-none">
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-bar-graph"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  fill="#9fa6ae"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                  fill="#9fa6ae"
                ></path>
                <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
            <div class="webinar-live__tabs">
              <svg
                style="height: 20px; width: 20px; color: rgb(159, 166, 174);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-camera-video-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                  fill="#9fa6ae"
                ></path>
              </svg>
            </div>
          </div>
          <div class="webinar-live__person-pic">
            <img src="~/static/person.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-7  webinar-live__main">
          <div class="webinar-live__header" v-if="!chatStatus">
            <div class="webinar-live__back">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 25.451 25.451"
                xml:space="preserve"
                fill="#000"
                class="arrow"
                style="width: 10px;"
              >
                <g>
                  <g id="c185_triangle">
                    <path
                      d="M20.982,0.521v2.006L8.57,12.315c-0.121,0.101-0.195,0.251-0.195,0.41s0.074,0.311,0.195,0.41l12.412,9.79v2.005
			c0,0.199-0.115,0.383-0.297,0.469c-0.178,0.086-0.395,0.064-0.549-0.061L4.664,13.136c-0.122-0.1-0.194-0.251-0.194-0.41
			s0.072-0.31,0.194-0.41L20.136,0.113c0.154-0.126,0.371-0.148,0.549-0.061C20.866,0.139,20.982,0.322,20.982,0.521z"
                    ></path>
                  </g>
                  <g id="Capa_1_58_"></g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
            <h4 class="webinar-live__title">
              مصاحبه تستی در وبینار انلاین
            </h4>
            <span class="webinar-live__badge ml-2 webinar-live__badge_purple">
              تیم طراحی سایت
            </span>
          </div>
          <div class="webinar-live__info" v-if="!chatStatus">
            <div class="webinar-live__invited">
              <svg
                style="height: 20px; width: 20px; color: rgb(162, 169, 177);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  fill="#a2a9b1"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  fill="#a2a9b1"
                ></path>
                <path
                  d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  fill="#a2a9b1"
                ></path>
              </svg>
              <span>تعداد افراد دعوت شده :</span>
              <span class="webinar-live__badge webinar-live__badge_green  f-is"
                >6</span
              >
            </div>
            <div class="webinar-live__absent">
              <svg
                style="height: 20px; width: 20px; color: rgb(162, 169, 177);"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-x-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                  fill="#a2a9b1"
                ></path>
              </svg>
              <span>افراد غایب : </span>
              <span class="webinar-live__badge webinar-live__badge_red f-is"
                >2</span
              >
            </div>
            <div class="webinar-live__add-user">
              <span class="badge">
                <svg
                  style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span>اضافه کردن کاربران به وبینار</span>
            </div>
          </div>
          <div
            id="video-container"
            @mousemove="overLayController(3000)"
            class="webinar-live-player"
          >
            <div id="over-lay" class="webinar-live-player__overlay" @click="changeOriation">
              <div class="webinar-live-player__header">
                <div class="webinar-live-player__publisher">
                  <div class="img-frame">
                    <img src="~/static/person.jpg" alt="" />
                  </div>
                  <div class="content">
                    <span>سخنران</span>
                    <h5>علی آقاخانی</h5>
                  </div>
                </div>
                <!-- <div class="webinar-live-player__timer f-is">
                  <span> 10:00 </span>
                </div> -->
              </div>
              <div class="webinar-live-player__footer">
                <div style="width:147px" class="d-none d-lg-block"></div>
                <div class="webinar-live-player__controlbox">
                  <span
                    @click="fullScreen"
                    class="wbinar-live-player__full-screen"
                  >
                    <svg
                      v-if="!fullScreenFlag"
                      style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrows-fullscreen"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                    <svg
                      v-if="fullScreenFlag"
                      style="color: white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-fullscreen-exit"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <span class="wbinar-live-player__call">
                    <svg
                      style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <span
                    @click="isMute = !isMute"
                    class="wbinar-live-player__mute"
                  >
                    <svg
                      v-if="!isMute"
                      style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-mic-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                    <svg
                      v-if="isMute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-mic-mute-fill"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      <path
                        d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"
                        id="mainIconPathAttribute"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"
                        id="mainIconPathAttribute"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <span class="wbinar-live-player__camera">
                    <svg
                      style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-camera-video-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <span class="wbinar-live-player__setting">
                    <svg
                      style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pin-angle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="webinar-live-player__valume-control">
                  <span>
                    <svg
                      style="height: 20px; width: 20px; color: rgb(255, 255, 255);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-volume-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <input type="range" />
                </div>
              </div>
            </div>
            <!-- <video
              class="webinar-live-player__video"
              poster="~/static/poster.jpg"
            ></video> -->
            <img src="~/static/poster.jpg" style="width:100%" alt="">
          </div>
        </div>
        <div class="col-lg-4  live-chat">
          <LiveChat @mobileChatStatus="chatHandler" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
  // components : {
  //   name: 'liveChat'
  // }
  data: () => ({
    fullScreenFlag: false,
    idleTimer: null,
    idleState: false,
    isMute: false,
    chatStatus: false
  }),
  methods: {
    changeOriation(){
     screen.orientation.lock("portrait")
    },
    chatHandler(status) {
      this.chatStatus = status;
    },
    fullScreen() {
      var element = document.getElementById("video-container");
      //let that = this
      if (!this.fullScreenFlag) {
        if (element.mozRequestFullScreen) {
          this.fullScreenFlag = true;
          element.mozRequestFullScreen();
          this.makeLandscape();
        } else if (element.webkitRequestFullScreen) {
          this.fullScreenFlag = true;
          element.webkitRequestFullScreen();
          this.makeLandscape();
        }
      } else if (this.fullScreenFlag) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }

        this.fullScreenFlag = false;
      }
    },
    makeLandscape() {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("landscape");
      }
    },
    overLayController(time) {
      clearTimeout(this.idleTimer);
      if (this.idleState == true) {
        // $("#foo").removeClass("inactive");
        document.getElementById("over-lay").style.opacity = 1;
      }
      this.idleState = false;
      this.idleTimer = setTimeout(() => {
        document.getElementById("over-lay").style.opacity = 0;
        this.idleState = true;
      }, time);
    }
  },
  mounted() {
    this.overLayController(3000); //? time to disappear over-lay first time

    var current_mode = screen.orientation;

    // type
    console.log(current_mode.type);

    // angle
    console.log(current_mode.angle);
  }
};
</script>

<style scoped lang="scss">
body{
  margin-bottom: 0!important;
  padding-bottom: 0!important;
  overflow-x: hidden;
}
.webinar-live {
  * {
    color: black;
  }
  height: 100vh;
  &__chat {
    background: blue;
  }
  &__main {
    background: white;
    @media (min-width: 992px) {
      border-right: 2px solid rgba(85, 85, 85, 0.192);
      border-radius: 20px;
    }
  }
  &__header {
    padding: 30px 10px;
    border-bottom: 2px solid rgba(85, 85, 85, 0.192);
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      padding: 5px;
    }
  }
  &__back {
    background: rgba(190, 190, 190, 0.575);
    padding: 5px 10px;
    border-radius: 10px;
    margin-left: 10px;

    svg {
      transform: rotate(180deg);
    }
  }
  &__title {
    margin-bottom: 0;
    font-size: 16px;
    @media (max-width: 992px) {
      font-size: 14px;
    }
  }
  &__info {
    display: flex;
    padding: 20px 10px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    @media (max-width: 992px) {
      padding: 10px 10px;
    }
    div {
      font-size: 0.9rem;
      @media (max-width: 992px) {
        min-width: 200px;
        //  span{
        //    font-size:.9rem;
        //  }
      }
    }
  }
  &__info::-webkit-scrollbar {
    display: none;
  }
  &__invited {
    margin-left: 30px;
  }
  &__badge {
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8rem;
    &_green {
      background: #d1e6e7;
      color: #4fad9f;
    }
    &_red {
      background: #fcf2f1;
      color: #d27178;
    }
    &_purple {
      background: #d3d5e4;
      color: #5b5e87;
    }
  }
  &__absent {
    margin-left: 10px;
  }
  &__add-user {
    margin-right: auto;
    span {
      color: green;
    }
    .badge {
      background: #039e8c;
      padding: 5px;
      border-radius: 10px;
      margin-left: 5px;
    }
  }
  &__tab {
    padding-top: 15px;
    padding-bottom: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: row;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  &__tabs-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      flex-direction: row;
    }
  }
  &__tabs {
    margin: 5px 0;
    padding: 10px 12px;
    border-radius: 15px;
    transition: background 0.4s;
    svg path {
      transition: background 0.4s;
    }
    &:hover {
      background: #dff3f1;
      svg path {
        fill: #05a28d !important;
      }
    }
  }
  &__person-pic {
    width: 80%;
    @media (max-width: 992px) {
      width: 10%;
      text-align: left;
    }
    img {
      width: 30px;
      border-radius: 100%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
  &__logo {
    width: 80%;
    width: 80%;
    @media (max-width: 992px) {
      width: 10%;
    }
    img {
      width: 30px;
    }
  }
}
.webinar-live-player {
  position: relative;
  overflow: hidden;
  &__overlay {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    position: absolute;
    // background: rgba(0, 0, 0, 0.369);
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.33239233193277307) 0%,
      rgba(255, 255, 255, 0) 73%
    );
    z-index: 1;
    // opacity: 0;
    transition: 0.3s opacity;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
      //justify-content: start;
    }
    &:hover {
      opacity: 1;
    }
  }
  &__video {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    &[poster] {
      height: 100%;
      object-fit: cover;
    }
  }
  &__header {
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    //align-items: center;
  }
  &__publisher {
    @media (max-width: 992px) {
      display: none;
    }
    width: 200px;
    display: flex;
    align-items: center;
    .img-frame {
      width: 40%;
      margin-left: 20px;
      background: white;
      border-radius: 20px;
      // overflow: hidden;
      img {
        width: 100%;
        border-radius: 20px;
        border: 2px solid white;
      }
    }
    .content {
      // width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      span {
        font-size: 0.8rem;
        line-height: 2.3rem;
        color: white;
      }
      h5 {
        color: white;
        font-size: 0.9rem;
      }
    }
  }
  &__timer {
    span {
      background: rgba(0, 0, 0, 0.644);
      border-radius: 10px;
      padding: 5px;
      color: white;
    }
  }
  &__footer {
    text-align: center;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
      margin-bottom: 0;
      justify-content: center;
    }
  }
  &__controlbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    span {
      padding: 10px 12px;
      border-radius: 100% !important;
      background-color: rgba(162, 162, 162, 0.73) !important;
      backdrop-filter: blur(5px);
      margin: 15px;
      transition: all 0.2s;
      @media (max-width: 992px) {
        margin: 7px;
        padding: 7px 9px;
      }
      &:hover {
        transform: translateY(-8px);
        cursor: pointer;
      }
    }
    span:nth-child(3) {
      background: #ff5956 !important;
      padding: 24px 26px;
      //border-radius: 24px !important;
      @media (max-width: 992px) {
        padding: 18px;
      }
    }
  }
  &__valume-control {
    @media (max-width: 992px) {
      display: none;
    }
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: rgba(202, 202, 202, 0.493) !important;
    padding: 23px 0px;
    border-radius: 200px !important;
    height: 0;
    width: 147px;
    justify-content: space-evenly;
    transform: rotate(90deg);

    // span {

    //   // position: absolute;
    //   top: -34px;
    //   // width: 41px;
    //   // height: 134px;
    //   left: 50px;
    // }
    svg {
      // position: absolute;
      // bottom: 10px;
      // left: 11px;
      transform: rotate(-90deg);
    }
    input {
      //  -webkit-appearance: none;
      margin: 18px 0;
      width: 60%;
      height: 4px;
      z-index: 2;
      // transform: rotate(90deg);
      position: relative;
      left: 6px;
      background: #fff;
      accent-color: #039e8c;
      border-radius: 5px;
      background: #d3d3d3;
      outline: none;
      //opacity: 0.7;
    }
    input:focus {
      background: #ffffff !important;
      accent-color: #039e8c !important;
      cursor: grab;
    }
    input:hover {
      background: #d3d3d3 !important;
      accent-color: #039e8c !important;
      cursor: pointer;
    }
    input::-webkit-slider-thumb {
      -webkit-appearance: none !important;
      // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      // border: 1px solid #000000;
      height: 16px;
      width: 16px;
      border-radius: 100%;
      background: black !important;
      cursor: pointer;
    }
    input::-ms-fill-upper {
      background: #039e8c !important;
      //border-radius: 2.6px;
    }
  }
}
@media (min-width: 992px) {
  .col-lg-1 {
    flex: 0 0 4.333333%;
    max-width: 4.333333%;
  }
  .col-lg-7 {
    flex: 0 0 62.333333%;
    max-width: 62.333333%;
  }
}
@media (max-width: 992px) {
  .col-lg-1,
  .col-lg-7,
  .col-lg-4 {
    padding: 5px !important;
  }
}
@media screen and (orientation: landscape) and (max-width: 768px) {
  .live-chat,
  .webinar-live__tab,
  .webinar-live__info,
  .webinar-live__header {
    display: none;
  }
  .webinar-live__main {
    padding: 0 !important;
    height: 100vh;
    max-width: 100% !important;
    flex: 0 0 100%;
  }
  .webinar-live-player {
    height: 100%;
  }
}
</style>
