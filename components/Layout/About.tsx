"use client";
import { motion } from "framer-motion";
import { Database, Edit3, RefreshCw, Zap, Shield, Clock } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Retrieve Data",
      description:
        "Pull data from your Google Sheets in real-time with seamless API integration. No complex queries, just simple spreadsheet reads.",
      color: "blue",
    },
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: "Insert Records",
      description:
        "Add new rows to your sheets programmatically. Create, capture, and store data without touching the spreadsheet interface.",
      color: "green",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Update Entries",
      description:
        "Modify existing data on the fly. Keep your content fresh and accurate with simple update operations.",
      color: "purple",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Fast Setup",
      description:
        "Connect your sheet and start building in minutes, not days.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure & Reliable",
      description:
        "Built on Google's infrastructure with enterprise-grade security.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Real-Time Updates",
      description:
        "Changes appear instantly. Edit a cell, see it live immediately.",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
    green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
    purple:
      "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
  };

  return (
    <div className="py-20">
      <div className="custom:px-12 mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Transform your spreadsheet into a powerful content management system
            with three core operations
          </p>
        </motion.div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                className={`mb-4 inline-flex rounded-full bg-linear-to-br ${colorMap[feature.color]} p-3 text-white shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
              <div
                className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-slate-100 p-8 sm:p-12 dark:bg-gray-900"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
            Why Choose This Approach?
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 rounded-full bg-white p-3 shadow-md dark:bg-slate-700">
                  <div className="text-blue-600 dark:text-blue-400">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-roboto-mono text-slate-600 italic dark:text-slate-400">
            &quot;If they can edit a spreadsheet, they can manage your entire
            application.&quot;
          </p>
        </motion.div>
      </div>
    </div>
  );
};
