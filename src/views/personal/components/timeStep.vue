<template>
  <div class="timeStep">
      <div v-if="data.length == 0">暂无数据</div>
      <ul v-else class="time-axis">
          <li class="time-axis-item" v-for="(li,i) in data" :key="i">
              <div class="time-axis-date">
                  {{ li.date | formatDate1 }}
                  <span></span>
              </div>
              <div class="time-axis-title">审核单位: {{ li.auditOrg }}</div>
              <div class="time-axis-achievement">审核意见:  {{ li.memo }}</div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="less" scoped>
.timeStep {
    .time-axis {
        margin: 0;
        padding: 0;
        position: relative;
        list-style: none;
        &::before {
            content: '';
            position: absolute;
            left: 149px;
            top: 15px;
            width: 1px;
            height: 100%;
            background-color: #E4E4E4;
        }
        .time-axis-item {
            position: relative;
            &:last-child {
                span {
                    border-color: #48BEB2;
                    &::after {
                        background-color: #48BEB2;
                        border-color: #48BEB2;
                    }
                }
            }
            .time-axis-date {
                position: absolute;
                left: 0;
                top: 0;
                color: #666;
            }
            span{
                position: absolute;
                left: 143px;
                top: 35%;
                display: block;
                width: 13px;
                height: 13px;
                border: 1px solid #ccc;
                border-radius: 100%;
                background-color: #fff;
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 7px;
                    height: 7px;
                    margin: auto;
                    background-color: #ccc;
                    border: 1px solid #ccc;
                    border-radius: 100%;
                }
            }

            .time-axis-title, .time-axis-achievement {
                text-align: left;
                margin-left: 170px;
            }
        }
    }
}
</style>