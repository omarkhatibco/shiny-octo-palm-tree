'use client'

import { createIcon } from '@chakra-ui/icons'

// using `path`
export const BethIcon = createIcon({
  displayName: 'BethIcon',
  viewBox: '0 0 100 100',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path
        fill='#fef6aa'
        d='M44.428,84.976c0,0-17.195,9.091-25.34-2.727S20.715,55.454,18,40s2.897-24.115,11.947-26.842 s21.72,20,21.72,20L44.428,84.976z'
      />
      <path d='M31.285,89.274c-4.682,0-9.6-1.493-13.021-6.458c-4.958-7.193-3.609-15.35-2.181-23.984 c1.003-6.069,2.041-12.345,0.932-18.659C14.453,25.59,19.062,15.394,29.659,12.2c9.712-2.929,22.35,19.514,22.882,20.471 c0.106,0.19,0.147,0.41,0.117,0.625l-7.24,51.818c-0.044,0.317-0.239,0.596-0.522,0.745C44.787,85.917,38.303,89.274,31.285,89.274 z M31.522,13.93c-0.44,0-0.87,0.06-1.287,0.185c-9.517,2.868-13.617,12.24-11.25,25.712c1.168,6.649,0.102,13.097-0.93,19.332 c-1.36,8.225-2.645,15.993,1.854,22.522c6.836,9.916,20.905,3.905,23.601,2.631l7.12-50.959 C47.28,27.438,38.156,13.93,31.522,13.93z M44.427,84.976h0.011H44.427z' />
      <polyline
        fill='#f4cccb'
        points='40.759,90.059 40.759,71.34 55.304,70.43 55.304,90.059'
      />
      <path d='M55.304,91.06c-0.553,0-1-0.447-1-1V71.495l-12.545,0.784v17.78c0,0.553-0.447,1-1,1s-1-0.447-1-1V71.34 c0-0.528,0.41-0.965,0.938-0.998l14.545-0.909c0.27-0.016,0.547,0.08,0.747,0.27c0.201,0.188,0.315,0.452,0.315,0.729V90.06 C56.304,90.612,55.856,91.06,55.304,91.06z' />
      <path
        fill='#f4cccb'
        d='M25.382,27.274c0,0-7.35,17.376,0.832,40.524s31.251,9.277,33.069-0.908 c1.818-10.185,5.074-21.373,5.093-40.325S30.004,8.046,25.382,27.274z'
      />
      <path d='M40.952,81.409c-4.608,0-11.707-2.033-15.682-13.278c-8.024-22.702-1.44-39.709-0.842-41.168 c2.819-11.515,15.348-16.415,25.728-15.181c9.396,1.118,15.228,6.783,15.22,14.784c-0.016,15.186-2.059,25.238-3.861,34.107 c-0.452,2.225-0.879,4.326-1.248,6.393c-1.074,6.016-9.182,13.568-18.025,14.291C41.84,81.389,41.408,81.409,40.952,81.409z M47.063,13.601c-8.965,0-18.522,4.815-20.708,13.907c-0.013,0.053-0.03,0.105-0.052,0.155c-0.071,0.171-7.092,17.324,0.853,39.802 c3.726,10.537,10.17,12.286,14.924,11.898c7.848-0.642,15.289-7.444,16.219-12.649c0.373-2.09,0.803-4.202,1.257-6.439 c1.784-8.777,3.806-18.725,3.821-33.711c0.008-8.252-6.945-12.021-13.456-12.796C48.981,13.656,48.024,13.601,47.063,13.601z M25.382,27.274h0.01H25.382z' />
      <ellipse
        cx='28.5'
        cy='42'
        fill='#fff'
        rx='6'
        ry='4.5'
      />
      <path d='M28.5,47c-3.584,0-6.5-2.243-6.5-5s2.916-5,6.5-5s6.5,2.243,6.5,5S32.084,47,28.5,47z M28.5,38c-3.032,0-5.5,1.794-5.5,4 s2.468,4,5.5,4s5.5-1.794,5.5-4S31.532,38,28.5,38z' />
      <circle
        cx='26'
        cy='42'
        r='1'
      />
      <path
        fill='#fef6aa'
        d='M34.342,8.607c0,0,29.802-11.79,42.445,16.325c0,0,3.612,10.884,1.806,19.046 s-0.903,16.325,3.612,24.488c4.515,8.163,0.903,23.581-15.353,24.488s-18.965-11.79-11.74-17.232 c-6.322-5.442-4.515-11.79,0.903-20.86s3.612-24.488,0-29.93c-3.612-5.442-15.353-5.442-23.48-5.442S23.505,14.048,34.342,8.607z'
      />
      <path d='M65.272,93.999c-7.264,0-12.575-2.825-14.366-7.722c-1.351-3.694-0.266-7.813,2.694-10.589 c-5.84-5.754-3.735-12.48,1.557-21.34c5.017-8.396,3.604-23.472,0.025-28.863c-3.315-4.995-14.949-4.995-22.647-4.995 c-4.003,0-6.599-1.266-7.122-3.473c-0.679-2.866,2.412-6.257,8.48-9.304c0.026-0.013,0.053-0.025,0.08-0.036 c0.308-0.121,30.84-11.811,43.726,16.845c0.014,0.031,0.026,0.063,0.037,0.095c0.151,0.455,3.678,11.241,1.833,19.577 c-1.854,8.383-0.706,16.164,3.512,23.787c2.679,4.844,2.537,11.61-0.352,16.837c-3.034,5.49-8.652,8.734-15.82,9.134 C66.354,93.983,65.808,93.999,65.272,93.999z M34.75,9.521c-5.59,2.815-7.74,5.56-7.391,7.036c0.278,1.175,2.31,1.934,5.176,1.934 c8.611,0,20.404,0,24.313,5.889c3.84,5.784,5.58,21.699,0.025,30.995c-5.983,10.018-6.273,15.144-1.108,19.59 c0.229,0.197,0.357,0.488,0.347,0.79c-0.01,0.303-0.155,0.585-0.397,0.767c-2.93,2.206-4.106,5.851-2.93,9.07 c1.604,4.385,6.838,6.755,14.013,6.365c6.455-0.36,11.492-3.239,14.182-8.104c2.568-4.648,2.71-10.637,0.352-14.901 c-4.402-7.957-5.651-16.432-3.715-25.188c1.667-7.53-1.516-17.697-1.764-18.469C63.858-1.295,36.412,8.876,34.75,9.521z' />
      <path
        fill='#ef5390'
        d='M33.902,65.5c0,0,0,4,4.218,4s7.381-6,7.381-6L33.902,65.5z'
      />
      <path d='M38.119,70c-4.664,0-4.718-4.455-4.718-4.5c0-0.243,0.175-0.451,0.415-0.493l11.599-2c0.186-0.03,0.378,0.045,0.489,0.199 c0.112,0.154,0.127,0.358,0.038,0.527C45.808,63.989,42.587,70,38.119,70z M34.438,65.915C34.569,66.847,35.193,69,38.119,69 c2.909,0,5.347-3.204,6.392-4.822L34.438,65.915z' />
      <path d='M39.5,57h-8c-0.166,0-0.321-0.082-0.414-0.22s-0.111-0.312-0.05-0.466l4-10c0.103-0.256,0.395-0.382,0.649-0.279 c0.257,0.103,0.381,0.394,0.278,0.65L32.238,56H39.5c0.276,0,0.5,0.224,0.5,0.5S39.776,57,39.5,57z' />
      <path d='M23.597,31.86c-0.131,0-0.26-0.05-0.358-0.15c-0.191-0.197-0.189-0.511,0.007-0.704c0.126-0.124,3.17-3.022,10.325-2.001 c0.273,0.039,0.464,0.292,0.425,0.566s-0.298,0.462-0.565,0.424c-6.63-0.949-9.457,1.698-9.484,1.725 C23.848,31.813,23.722,31.86,23.597,31.86z' />
      <path d='M53.5,32c-0.104,0-0.21-0.033-0.3-0.1c-3.777-2.833-9.562-1.917-9.618-1.907c-0.277,0.048-0.53-0.14-0.575-0.411 c-0.045-0.272,0.139-0.53,0.411-0.575c0.252-0.042,6.258-1.001,10.382,2.093c0.221,0.166,0.266,0.479,0.101,0.7 C53.802,31.931,53.651,32,53.5,32z' />
      <path d='M26.5,38c-0.209,0-0.404-0.132-0.475-0.342l-1-3c-0.087-0.262,0.055-0.545,0.316-0.632 c0.262-0.085,0.545,0.054,0.633,0.316l1,3c0.087,0.262-0.055,0.545-0.316,0.632C26.605,37.992,26.553,38,26.5,38z' />
      <path d='M30.5,38c-0.053,0-0.105-0.008-0.158-0.026c-0.262-0.087-0.403-0.37-0.316-0.632l1-3c0.089-0.262,0.373-0.401,0.633-0.316 c0.262,0.087,0.403,0.37,0.316,0.632l-1,3C30.904,37.868,30.709,38,30.5,38z' />
      <path d='M33.5,40c-0.161,0-0.319-0.078-0.416-0.223c-0.153-0.23-0.091-0.54,0.139-0.693l3-2c0.228-0.153,0.539-0.092,0.693,0.139 c0.153,0.23,0.091,0.54-0.139,0.693l-3,2C33.692,39.973,33.596,40,33.5,40z' />
      <ellipse
        cx='48.5'
        cy='42'
        fill='#fff'
        rx='6'
        ry='4.5'
      />
      <path d='M48.5,47c-3.584,0-6.5-2.243-6.5-5s2.916-5,6.5-5s6.5,2.243,6.5,5S52.084,47,48.5,47z M48.5,38c-3.032,0-5.5,1.794-5.5,4 s2.468,4,5.5,4s5.5-1.794,5.5-4S51.532,38,48.5,38z' />
      <circle
        cx='46'
        cy='42'
        r='1'
      />
      <g>
        <path d='M46.5,38c-0.209,0-0.404-0.132-0.475-0.342l-1-3c-0.087-0.262,0.055-0.545,0.316-0.632 c0.262-0.085,0.545,0.054,0.633,0.316l1,3c0.087,0.262-0.055,0.545-0.316,0.632C46.605,37.992,46.553,38,46.5,38z' />
      </g>
      <g>
        <path d='M43.5,40c-0.128,0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l2,2 c0.195,0.195,0.195,0.512,0,0.707C43.756,39.951,43.628,40,43.5,40z' />
      </g>
      <g>
        <path d='M50.5,38c-0.053,0-0.105-0.008-0.158-0.026c-0.262-0.087-0.403-0.37-0.316-0.632l1-3c0.089-0.262,0.373-0.401,0.633-0.316 c0.262,0.087,0.403,0.37,0.316,0.632l-1,3C50.904,37.868,50.709,38,50.5,38z' />
      </g>
      <g>
        <path d='M53.5,39c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l2-2c0.195-0.195,0.512-0.195,0.707,0 s0.195,0.512,0,0.707l-2,2C53.756,38.951,53.628,39,53.5,39z' />
      </g>
      <g>
        <path
          fill='#ef5390'
          d='M45.5,63.5c0,0-5.272,4-11.598,3s-4.218-5,1.054-4S39.174,64.5,45.5,63.5z'
        />
        <path d='M35.987,67.162c-0.703,0-1.425-0.052-2.164-0.168c-2.313-0.366-3.811-1.17-4.218-2.264 c-0.217-0.582-0.101-1.182,0.327-1.688c0.884-1.051,2.896-1.454,5.116-1.033c1.669,0.316,2.712,0.633,3.551,0.887 c1.772,0.537,2.58,0.781,6.822,0.11c0.234-0.032,0.449,0.087,0.538,0.298c0.09,0.211,0.024,0.456-0.158,0.595 C45.605,64.048,41.429,67.162,35.987,67.162z M33.333,62.84c-1.316,0-2.238,0.375-2.637,0.847 c-0.192,0.229-0.243,0.456-0.154,0.695c0.207,0.555,1.219,1.273,3.438,1.624c3.743,0.592,7.137-0.649,9.188-1.689 c-2.493,0.253-3.389-0.019-4.857-0.464c-0.815-0.247-1.831-0.555-3.446-0.861C34.308,62.886,33.796,62.84,33.333,62.84z' />
      </g>
      <g>
        <path d='M66.283,89.508c-1.085,0-2.251-0.091-3.505-0.29c-0.273-0.044-0.459-0.3-0.416-0.572s0.302-0.458,0.572-0.416 c6.436,1.021,11.247-0.718,14.3-5.171c0.156-0.229,0.469-0.286,0.694-0.13c0.229,0.155,0.286,0.467,0.13,0.694 C76.13,86.438,72.582,89.508,66.283,89.508z' />
      </g>
      <g>
        <path d='M79.142,81.097c-0.065,0-0.132-0.013-0.196-0.04c-0.254-0.108-0.372-0.401-0.264-0.656c0.84-1.973,1.054-3.557,1.056-3.572 c0.036-0.274,0.29-0.457,0.561-0.432c0.273,0.036,0.467,0.286,0.432,0.56c-0.009,0.07-0.23,1.729-1.128,3.837 C79.521,80.982,79.336,81.097,79.142,81.097z' />
      </g>
    </g>
  ),
})