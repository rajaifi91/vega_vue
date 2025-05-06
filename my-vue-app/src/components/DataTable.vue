<template>
    <VegaTable
      :columns="[
        {
          label: 'Date',
          prop: 'date',
        },
        {
          label: 'Amount',
          prop: 'amount',
        },
        {
          label: 'Balance',
          prop: 'balance',
        },
      ]"
      :data-source="[
        {
          key: '1',
          date: '01/01/2022',
          amount: 100,
          balance: '$100',
          status: 'In Progress',
        },
        {
          key: '2',
          date: '01/02/2022',
          amount: 300,
          balance: '$200',
          status: 'In Progress',
        },
        {
          key: '3',
          date: '01/03/2022',
          amount: 400,
          balance: '$300',
          status: 'Not Started',
        },
        {
          key: '4',
          date: '01/04/2022',
          amount: 200,
          balance: '$400',
          status: 'Pending',
        },
      ]"
    />
    <br/>
    <VegaTable
    :columns="[
      {
        label: 'Date',
        prop: 'date',
      },
      {
        label: 'Amount',
        prop: 'amount',
      },
      {
        label: 'Balance',
        prop: 'balance',
      },
      {
        label: 'Status',
        prop: 'status',
        render: (createElement, value) => {
          let bgColor;
          let textColor;
          switch (value) {
            case 'In Progress':
              bgColor = 'bg-accent5-secondary';
              textColor = 'text-primary';
              break;
            case 'Pending':
              bgColor = 'bg-status-warning';
              textColor = 'text-black';
              break;
            default:
              bgColor = 'bg-brand';
              textColor = 'text-inverted-primary';
          }
          return createElement('vega-badge', {
            size: 'small',
            text: value,
            bgColor: bgColor,
            textColor: textColor,
          });
        },
      },
      {
        label: 'Action',
        render: (createElement, value, record) => {
          return createElement(
            'vega-flex',
            {
              gap: 'size-8',
            },
            [
              createElement(
                'vega-button',
                {
                  'data-shrink': 0,
                  size: 'small',
                  onVegaClick: () => {
                    this.alert(`Row [Key: ${value}] - Edit button click`);
                  },
                },
                'Edit'
              ),
              createElement(
                'vega-button',
                {
                  'data-shrink': 0,
                  size: 'small',
                  danger: true,
                  onVegaClick: () => {
                    this.alert(
                      `Row [Key: ${value}, Date: ${record['date']}] - Delete button click`
                    );
                  },
                },
                'Delete'
              ),
            ]
          );
        },
      },
    ]"
    :data-source="[
      {
        key: '1',
        date: '01/01/2022',
        amount: 100,
        balance: '$100',
        status: 'In Progress',
      },
      {
        key: '2',
        date: '01/02/2022',
        amount: 300,
        balance: '$200',
        status: 'In Progress',
      },
      {
        key: '3',
        date: '01/03/2022',
        amount: 400,
        balance: '$300',
        status: 'Not Started',
      },
      {
        key: '4',
        date: '01/04/2022',
        amount: 200,
        balance: '$400',
        status: 'Pending',
      },
    ]"
  />
  <br/>
  <VegaFlex direction="col">
    <div class="v-font-h4 v-text-primary">Responsive</div>
    <VegaTable
      :density="{
        default: 'default',
        S: 'compact',
        M: 'default',
        L: 'relaxed',
      }"
      :columns="[
        {
          label: 'Date',
          prop: 'date',
        },
        {
          label: 'Amount',
          prop: 'amount',
        },
        {
          label: 'Balance',
          prop: 'balance',
        },
      ]"
      :data-source="[
        {
          address: 'New_York_No._1_Lake_Park',
          amount: 100,
          balance: '$100',
          date: '01/01/2022',
          desc: 'Test text description',
          key: '1',
          name: 'Jon Snow',
          status: 'In Progress',
        },
        {
          address: 'New York No. 2 Lake Park',
          amount: 300,
          balance: '$200',
          date: '01/02/2022',
          desc: 'Test text description Test text description',
          key: '2',
          name: 'Jeremiah Graham',
          status: 'In Progress',
        },
        {
          address: 'New York No. 3 Lake Park',
          amount: 400,
          balance: '$300',
          date: '01/03/2022',
          desc: 'Test text description Test text description Test text description',
          key: '3',
          name: 'Jaime Stark',
          status: 'Not Started',
        },
        {
          address: 'New York No. 4 Lake Park',
          amount: 200,
          balance: '$400',
          date: '01/04/2022',
          desc: 'Test text description Test text description Test text description Test text description Test text description',
          key: '4',
          name: 'Enrique Brewer',
          status: 'Pending',
        },
      ]"
    />
  </VegaFlex>
  </template>
  
<script>
import { VegaTable, VegaFlex } from "@heartlandone/vega-vue";
export default {
  data() {
    return {};
  },
  components: { VegaTable, VegaFlex },
  methods: {
    alert(string) {
      window.alert(string);
    },
  },
};
</script>