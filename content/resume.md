---
title: "Yuteng Chen"
type: "resume"
---

## Summary

Apache Yunikorn **PMC Member** and Software Engineer with 1+ years at **ASUS**. Merged **31+ PRs (75 commits)** across Apache Yunikorn and Flyte; led the **v1.3.0 release** and benchmarked scheduling throughput at **204 pods/sec on 2K nodes** (4.2× faster than default scheduler). Core expertise: **Kubernetes observability**, **MLOps** (Flyte, Ray), **GPU monitoring**, distributed tracing (OpenTelemetry), and cloud-native backend development in Go & Python.

---

## Technical Skills

**Harness Engineering:** Copilot, Antigravity, Claude Code, Openspec, Hook, Skill, MCP

**MLOps:** Flyte, Ray Training, Ray CRD, Dask, Pytorch, Mlflow, ollama, vllm

**Containers & Orchestration:** Docker, Kubernetes (kubeadm, k3d, kind, k3s)

**Backend Development:** Shell Script, Python (FastAPI), Go (httprouter), Memray, RabbitMQ, SQL (Postgres, Dolt), s3 (Minio, Apache Ozone), uv, Ubuntu

**Observability:** Grafana, Prometheus, Loki, Tempo, Jaeger, OpenTelemetry (operator, collector, SDK)

**IaC & CI/CD:** Helm, Pre-commit, Ruff, Makefile, GitHub Actions (Github Act), GitLab CI, ArgoCD, AWS, Azure

**Development:** Unit Testing, Linting, Performance Benchmarking, Documentation

**Security:** Trivy, Bandit

---

## Work Experience

**ASUS** — Software Engineer &nbsp;&nbsp;&nbsp;&nbsp; *May 2024 – Sep 2025 | Taipei, Taiwan*

- Architected an end-to-end model deployment pipeline with **RabbitMQ**, enabling reliable async task queuing and decoupling services to support concurrent inference requests at scale.
- Reduced ML service Docker image size by **62%** through multi-stage builds and layer optimization, accelerating initial ML inference deployment speed.
- Built a **GPU utilization monitoring dashboard** with Grafana and Postgres, enabling cross-architecture performance comparison to improve GPU allocation efficiency.
- Integrated distributed tracing across microservices using **OpenTelemetry** (operator + zero-code instrumentation) with Azure Insights export, reducing mean time to diagnose production latency issues.
- Built an **Azure cost-saving service** allowing developers to tag AKS clusters and VMs with scheduled on/off rules, reducing idle resource spend by 10–15%.
- Diagnosed and resolved **memory leaks** in high-density container environments, preventing OOM-induced pod crashes and improving service uptime under peak load.
- Owned cross-team **release coordination** including Helm-based deployments, release process management, and customer notifications prior to production rollouts.

---

## Open Source Experience

**Apache Yunikorn** — PMC Member / Contributor

*Cloud-native, high-throughput, fine-grained resource management scheduler — 31+ PRs (75 commits)*

- **Release Manager:** Led the v1.3.0 release lifecycle — coordinating changelog, artifact publishing, and community announcements — delivering an on-time, community-ready release.
- **Performance:** Benchmarked scheduling throughput at scale: **204 pods/sec on 2K nodes (4.2× faster than default scheduler)** and 115 pods/sec on 4K nodes; presented findings publicly (YouTube) to establish data-driven community baselines.
- **Quality Assurance:** Refactored test suites to table-driven style and resolved complex race conditions, improving code coverage and eliminating flaky tests across core scheduling paths.
- **Documentation:** Maintained metrics, release, and Docsearch documentation, lowering onboarding friction for new contributors and keeping official references accurate across releases.

**Flyte** — Contributor

*Kubernetes-native workflow automation platform for Data and ML pipelines*

- Fixed critical cluster setup issues including missing Helm charts and kubeconfig permission errors, improving deployment reliability for new users.
- Enhanced **ListRuns** API to surface action details and extended `new_remote` with `file_name` parameter support, improving observability and SDK usability for ML pipeline authors.
- Fixed `flytectl` install script to support version pinning and repaired broken architecture documentation links, reducing friction for new contributors.

---

## Education

**Taichung University of Education** — Master of Computer Science &nbsp;&nbsp;&nbsp;&nbsp; *2021 – 2023 | Taichung, Taiwan*
